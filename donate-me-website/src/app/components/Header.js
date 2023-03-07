"use client";
import React, { useState, useEffect, useContext } from "react";
import { MetamaskContext } from "./Metamask";

export default function Header() {
  const { account, connectToMetamask } = useContext(MetamaskContext);
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
