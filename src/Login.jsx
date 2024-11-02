import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'; 

export const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState(""); 

  let navigate = useNavigate();

  function goToDashboard  ()  {
    if (email === "12345" && password === "shoxrux") {
      navigate("/dashboard");
    } else {
      setError("Xato kiritdingiz!!!"); 
    }
  };

  return (
    <div className="login container">
      <h1>Login</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <br /><br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password" 
        placeholder="Password"
      />
      <br /><br />
      {error && <p className="error">{error}</p>}
      <button onClick={goToDashboard}>Kirish</button>
    </div>
  );
};
