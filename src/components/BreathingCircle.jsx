import React,{useEffect,useState} from "react";
import "../styles/breathing.css";

export default function BreathingCircle(){
  const [phase,setPhase]=useState("in");
  useEffect(()=>{
    const i=setInterval(()=>setPhase(p=>p==="in"?"hold":p==="hold"?"out":"in"),4000);
    return()=>clearInterval(i);
  },[]);
  const text = phase==="in"?"Breathe In…":phase==="hold"?"Hold…":"Breathe Out…";
  return (
    <div className="breathing-wrapper">
      <div className={`circle ${phase}`}></div>
      <p className="breathing-text">{text}</p>
    </div>
  );
}
