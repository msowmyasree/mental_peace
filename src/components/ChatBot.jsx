import React,{useState} from "react";
import "../styles/chat.css";

export default function ChatBot({onTriggerHuman}){
  const [messages,setMessages]=useState([{sender:"bot",text:"Hey, I’m here with you. What’s on your mind?"}]);
  const [input,setInput]=useState("");

  const danger=["suicide","kill myself","die","self harm","hurt myself","end my life","overdose","no reason to live"];
  const isDanger = t => danger.some(w=>t.toLowerCase().includes(w));

  const send=()=>{
    if(!input.trim())return;
    setMessages(p=>[...p,{sender:"user",text:input}]);

    if(isDanger(input)){
      setMessages(p=>[...p,{sender:"bot",text:"Please pause. You are important. Do not harm yourself. ❤️"}]);
      setTimeout(()=>onTriggerHuman(),1500);
      setInput("");
      return;
    }

    setMessages(p=>[...p,{sender:"bot",text:"I hear you. Tell me more, I'm here."}]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((m,i)=><div key={i} className={`msg ${m.sender}`}>{m.text}</div>)}
      </div>
      <div className="chat-input">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type your feelings..." />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
