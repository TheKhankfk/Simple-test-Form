import { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="App">
      <h1> Basic Form </h1>
      <form>
        <div className="formz">
          <label>Username </label>
          <input
            type="name"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <label>Password </label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
      </form>
      <div>{message} </div>
      <div>{pass} </div>
    </div>
  );
}
