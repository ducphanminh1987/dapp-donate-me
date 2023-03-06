"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [account, setAccount] = useState();

  useEffect(() => {
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts) => setAccount(accounts[0]));
  }, []);

  const connectToMetamask = async () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => setAccount(accounts[0]));
  };

  return (
    <div className="header">
      <div className="header-right">
        {account ? (
          <p>Hi {account}</p>
        ) : (
          <button className="connect-btn" onClick={connectToMetamask}>
            Connect to Wallet
          </button>
        )}
      </div>
    </div>
  );
}
