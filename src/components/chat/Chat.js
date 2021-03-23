import React, {useState} from "react";
import {connect} from "react-redux";

import { userMessage, botMessage } from "../../actions/matty";

const Chat = ({chat, userMessage, botMessage}) => {

  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      userMessage(message);
      botMessage(message);
      setMessage("");
    }
  }

  return (<div className="chat">
    <h2>Matt le ChatBot</h2>
    {chat.length === 0 ? "" : chat.map((msg) => <div className={msg.type}>{msg.message}</div>)}
    <input 
      id="chatInput" 
      placeholder="Ecrivez votre message..."
      onChange={(e) => setMessage(e.target.value)} 
      onKeyPress={handleClick}
      value={message}></input>
  </div>)
}
const mapStateProps = state =>({
  chat: state.matty.messages
})

export default connect( mapStateProps, {userMessage, botMessage})(Chat);