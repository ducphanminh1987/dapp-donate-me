"use client";
import React, { useState } from "react";

const MetamaskContext = React.createContext(null);

function Metamask({ children }) {
  const [account, setAccount] = useState();

  const connectToMetamask = async () => {
    window.ethereum.request({ method: "eth_requestAccounts" });
  };

  return (
    <MetamaskContext.Provider
      value={{ metamaskInstalled, account, contract, connectToMetamask }}
    >
      {children}
    </MetamaskContext.Provider>
  );
}

export { MetamaskContext, Metamask };
