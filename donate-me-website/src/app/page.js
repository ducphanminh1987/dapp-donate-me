import React from "react";
import "./index.css";
// import Metamask from "./components/Metamask";
import Header from "./components/Header";
import SendDonate from "./components/SendDonate";
import Memos from "./components/Memos";

export default function Home() {
  return (
    <div className="home">
      <div className="main">
        <Header />
        <div className="body">
          <SendDonate />
          <Memos />
        </div>
      </div>
    </div>
  );
}
