"use client"; // this is a client component
import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { address, abi } from "../DonateMe.json";
import { MetamaskContext } from "./Metamask";
const timeDoubleToString = (time) => new Date(time).toUTCString();

export default function Memos() {
  const { contract } = useContext(MetamaskContext);

  const [memos, setMemos] = useState([]);

  const getMemos = async (contract) => {
    const memos = await contract.getMemos();
    setMemos(memos);
  };

  const onNewMemo = (from, timestamp, name, message) => {
    console.log("time", timestamp);
    setMemos((prev) => [...prev, { from, timestamp, name, message }]);
  };

  useEffect(() => {
    // get memo list from contract
    if (contract) {
      getMemos(contract);
      contract.on("NewMemo", onNewMemo);
    }
    return () => {
      if (contract) {
        contract.off("NewMemo", console.log);
      }
    };
  }, [contract]);

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
