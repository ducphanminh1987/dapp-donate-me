"use client"; // this is a client component

import React, { useState } from "react";
import "../index.css";

function SendDonate({}) {
  const [tip, setTip] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  return (
    <fieldset className="donate">
      <legend>Donate to me</legend>
      <div className="item">
        <div>
          <label for="">Name</label>
        </div>
        <div className="input">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="item">
        <div>
          <label for="">Message</label>
        </div>
        <div className="input">
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="item">
        <div>
          <label for="">Tip</label>
        </div>
        <div className="input">
          <input
            type="number"
            step="0.1"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </div>
      </div>
      <div className="item">
        <div>
          <button className="connect-btn">Donate</button>
        </div>
      </div>
    </fieldset>
  );
}

export default SendDonate;
