import React,{useState} from "react";
import "../styles/chat.css";

export default function EmergencyForm(){
  const [form,setForm]=useState({name:"",phone:"",message:""});
  const [status,setStatus]=useState("");

  const change=e=>setForm({...form,[e.target.name]:e.target.value});

  const submit=async()=>{
    if(!form.phone.trim()){setStatus("Phone number is required.");return;}
    setStatus("Sending alert...");

    try{
      const r=await fetch("/api/sendAlert",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
      });

      if(!r.ok){
        const errText = await r.text().catch(()=>null);
        setStatus("Failed to send alert.");
        console.error('Alert error', r.status, errText);
        return;
      }

      const out=await r.json();
      if(out.success) setStatus("Someone will reach you soon ❤️");
      else setStatus("Failed to send alert.");
    }catch(e){setStatus("Server error.");}
  };

  return (
    <div className="form-box">
      <h3>Talk to a Human</h3>
      <input name="name" placeholder="Your Name (optional)" value={form.name} onChange={change}/>
      <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={change}/>
      <textarea name="message" placeholder="Write something (optional)" value={form.message} onChange={change}/>
      <button className="btn-primary" onClick={submit}>Submit</button>
      <p className="status-text">{status}</p>
    </div>
  );
}
