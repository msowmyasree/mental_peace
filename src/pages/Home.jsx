import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const navigate = useNavigate();
  const quotes=["This feeling is temporary.","Breathe. You are stronger than this moment.","You matter more than you think."];

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="title">You are not alone.<br/>I am with u.</h1>
        <p className="subtitle">Even in your darkest moment, support is here.</p>
        <div className="quotes-box">{quotes.map((q,i)=><p key={i} className="quote">{q}</p>)}</div>
        <div className="home-buttons">
          <button onClick={()=>navigate("/chat")} className="btn-primary">💬 Talk Now</button>
          <button onClick={()=>navigate("/breathing")} className="btn-secondary">🌬 Calm Me Down</button>
        </div>
      </div>
    </div>
  );
}
