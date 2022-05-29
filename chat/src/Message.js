import { useEffect, useRef, useState } from "react";
import receive from './receive.mp3';
import sentTone from './send.wav';

const Message = (props) => {

  
    const [color, setColor] = useState("w3-text-green");

    const received = new Audio(receive);
    const sent = new Audio(sentTone);

    useEffect(() => {
        if (props.name != localStorage.getItem('consoleUserName')) {
            received.play();
        } else {
            sent.play();
        }
       
        setTimeout(() => { setColor("w3-text-white") }, 3000);


    },[]);
   



    return (<div className="w3-bar" >

        <div className={`w3-bar-item ${color}  consoleFont`}>User>${props.name}:</div>

        <textarea readOnly style={{ width: '90%' }} defaultValue={props.message} className={`w3-black ${color}  consoleFont  w3-bar-item w3-border w3-border-black`} type="text" spellCheck="false" /></div>);


}



export default Message;