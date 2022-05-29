import { useRef } from "react";
import { io } from 'socket.io-client';
import axios from 'axios';

const MessageSender = (props) => {

    const messageRef = useRef();
  // const socket = io("http://localhost:5000");
     const socket = io();
    const userName = localStorage.getItem('consoleUserName');
    


    const submit = (event) => {

        if (messageRef.current.value.trim().length > 0 ) {
            if (event.key === 'Enter') {

                if (messageRef.current.value === 'logout') {

                    localStorage.removeItem('consoleUserName');
                    props.Fxn(true);

                }  else {
                    socket.emit('send', { name: userName, message: messageRef.current.value })
                }

                

                messageRef.current.value = "";

            }
        }

       

    }




    return (<div className="w3-bar" >

        <div className="w3-bar-item consoleFont">User>${props.name}:</div>

        <input ref={messageRef} onKeyPress={(e) => { submit(e) }} autoFocus style={{ width: '90%' }} className="w3-black  consoleFont  w3-bar-item w3-border w3-border-black" type="text" spellCheck="false" /></div>);


}



export default MessageSender;