import React,{useState} from "react";
import ChatBot from "../components/ChatBot";
import EmergencyForm from "../components/EmergencyForm";
import "../styles/chat.css";

export default function Chat(){
  const [showForm,setShowForm]=useState(false);
  return (
    <div className="chat-page">
      <h2 className="chat-title">I am here with you ❤️</h2>
      {!showForm ? <ChatBot onTriggerHuman={()=>setShowForm(true)} /> : <EmergencyForm />}
    </div>
  );
}
