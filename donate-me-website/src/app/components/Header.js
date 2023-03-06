"use client";
import React, { useContext, useState, useEffect } from "react";
// import { MetamaskContext } from "./Metamask";

export default function Header() {
  //   const { connectToMetamask } = useContext(MetamaskContext);

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
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const accounts = await signer.getAddress();
    // console.log(accounts);
    // setAccount(accounts[0]);
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
