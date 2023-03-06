"use client"; // this is a client component
import React, { useState, useEffect, useMemo } from "react";
import { ethers } from "ethers";
import { address, abi } from "../DonateMe.json";

const timeDoubleToString = (time) => new Date(time).toUTCString();

export default function Memos() {
  const [memos, setMemos] = useState([]);

  const getMemos = async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    // setContract(contract);
    const memos = await contract.getMemos();
    setMemos(memos);
  };

  useEffect(() => {
    // get memo list from contract
    getMemos();
  }, []);

  const onNewMemo = (from, timestamp, name, message) => {
    console.log("time", timestamp);
    setMemos((prev) => [...prev, { from, timestamp, name, message }]);
  };

  useEffect(() => {
    const { ethereum } = window;
    let contract = null;
    // Listen for new memo events.
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, abi, signer);
      contract.on("NewMemo", onNewMemo);
    }

    return () => {
      if (contract) {
        contract.off("NewMemo", onNewMemo);
      }
    };
  }, []);

  return (
    <fieldset className="memos">
      <legend>Donations</legend>
      {memos.map((m) => (
        <div className="memo">
          <div className="from">thanks to {m.name}</div>
          <div className="time">{timeDoubleToString(m.timestamp)}</div>
          <p className="message">
            who donated with message:
            <span className="quote">{m.message}</span>
          </p>
        </div>
      ))}
    </fieldset>
  );
}
