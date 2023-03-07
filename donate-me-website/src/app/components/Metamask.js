"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
const MetamaskContext = React.createContext(null);
import { address, abi } from "../DonateMe.json";

function Metamask({ children }) {
  const [account, setAccount] = useState();

  const [contract, setContract] = useState();

  const connectToMetamask = async () => {
    window.ethereum.request({ method: "eth_requestAccounts" });
  };

  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) return;

    // get current account
    ethereum.request({ method: "eth_accounts" }).then((accounts) => {
      if (accounts.length <= 0) return;
      setAccount(accounts[0]);
      // init smart contract
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, abi, signer);
      setContract(contract);
    });

    // detect account changed on Metamask
    console.log("listen on account change events");
    ethereum.on("accountChanged", (accounts) => setAccount(accounts[0]));
  }, []);

  return (
    <MetamaskContext.Provider
      value={{
        account,
        connectToMetamask,
        contract,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
}

export { MetamaskContext, Metamask };
