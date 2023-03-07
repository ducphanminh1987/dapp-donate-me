import React from "react";
import "./index.css";
// import Metamask from "./components/Metamask";
import Header from "./components/Header";
import SendDonate from "./components/SendDonate";
import Memos from "./components/Memos";
import { Metamask } from "./components/Metamask";

export default function Home() {
  return (
    <div className="home">
      <div className="main">
        <Metamask>
          <Header />
          <div className="body">
            <SendDonate />
            <Memos />
          </div>
        </Metamask>
      </div>
    </div>
  );
}
