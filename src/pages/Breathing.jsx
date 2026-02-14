import React from "react";
import BreathingCircle from "../components/BreathingCircle";
import "../styles/breathing.css";

export default function Breathing(){
  return (
    <div className="breathing-container">
      <h2 className="breathing-title">Let’s breathe together. Follow the circle.</h2>
      <BreathingCircle />
      <div className="grounding-box">
        <h3>Grounding Exercise</h3>
        <p>🌿 Name 5 things you see</p>
        <p>✋ Name 4 things you feel</p>
        <p>👂 Name 3 things you hear</p>
        <p>👃 Name 2 things you smell</p>
        <p>💛 Name 1 thing you love</p>
      </div>
    </div>
  );
}
