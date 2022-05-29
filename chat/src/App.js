import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { io } from 'socket.io-client';
import { useEffect, useMemo, useRef, useState } from 'react';
import ConsoleField from './ConsoleField';
import MessageSender from './MessageSender';
import Message from './Message';
function App() {

   // const socket = io("http://localhost:5000");
    const socket = io();
    const [userName, setUserName] = useState("");
    const [showLogin, setLoginStatus] = useState(false);
    const textRef = useRef();
    const [messages, updateMessages] = useState([]);
    console.log('app')

    window.scrollTo(0, document.body.scrollHeight);
    useMemo(() => {
        socket.on('receive', (msg) => {

            console.log('recieve')
            updateMessages(prev => { return [...prev, { ...msg }] });
        });

    },[]);
    


    useEffect(() => {
        


        if (localStorage.getItem('consoleUserName') === null) {

            setLoginStatus(true);
        } else {

            setLoginStatus(false);
        }


    },[]);



  return (<div>
      <div style={{position:'fixed'}} className=" w3-display-topmiddle consoleFont w3-black w3-center ">
       Welcome to Chat-Console
      </div>
      <br /><br /><br /><br />
      <div className="w3-text-green consoleFont w3-margin-left">Enter your name,<br /> press Enter and<br /> Start Chatting...<br />
          Enter '<span className="w3-text-red">logout</span>' to logout yourself      </div>

      <br /><br />
      {showLogin && <ConsoleField Fxn={setLoginStatus} />}


      {messages.map(i => { return <Message key={messages.indexOf(i) }  name={i.name} message={i.message} />})}


     

      {!showLogin && <MessageSender Fxn={setLoginStatus } name={localStorage.getItem('consoleUserName') }/>}


     
      <br /><br /><br /><br /><br /><br />

      </div>
  );
}

export default App;
