"use client"; // this is a client component

import React, { useState, useMemo, useEffect } from "react";
import { ethers } from "ethers";
import { address, abi } from "../DonateMe.json";
import "../index.css";

function SendDonate() {
  const [tip, setTip] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const donate = async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    const donateTransaction = await contract.donate(
      name ?? "Someone",
      message ?? "",
      { value: ethers.utils.parseEther(tip) }
    );

    await donateTransaction.wait();

    console.log("donated");

    setName("");
    setMessage("");
    setTip("");
  };

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
          <button onClick={donate} className="connect-btn">
            Donate
          </button>
        </div>
      </div>
    </fieldset>
  );
}

export default SendDonate;
