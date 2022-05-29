import { useRef } from "react";

import { io } from 'socket.io-client';

const ConsoleField = (props) => {

    const nameRef = useRef();
    //const socket = io("http://localhost:5000");

    const socket = io();


    const submit = (event) => {
        if (nameRef.current.value.trim().length > 0) {
            if (event.key === 'Enter') {

                socket.emit('send', { name: nameRef.current.value, message: "joined the chat..." })
                localStorage.setItem('consoleUserName', nameRef.current.value);
                props.Fxn(false);

            }
        }
    }




    return (<div className="w3-bar" >

        <div className="w3-bar-item w3-text-red consoleFont">Enter Your Name:</div>

        <input ref={nameRef} onKeyPress={(e) => { submit(e) }} autoFocus style={{ width: '50%' }} className="w3-black  consoleFont  w3-bar-item w3-border w3-border-black" type="text" spellCheck="false" />
       

    </div>);
    

}



export default ConsoleField;