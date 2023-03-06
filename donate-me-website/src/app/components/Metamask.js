"use client";

import React, { useState } from "react";
import { ethers } from "ethers";
// import { metamaskProvider } from "@ethersproject/providers";

const MetamaskContext = React.createContext(null);

function Metamask({ children }) {
  const [account, setAccount] = useState();

  const connectToMetamask = async () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(console.log);
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const accounts = await signer.getAddress();
    // console.log(accounts);
    // setAccount(accounts[0]);
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
