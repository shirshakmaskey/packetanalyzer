import React, { Component } from "react";
import PacketForm from "../common/PacketForm";
import PacketAnalyzer from "../common/PacketAnalyzer";
class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>this is homepage header</h2>
        <PacketForm />
        <PacketAnalyzer />
      </div>
    );
  }
}
export default HomePage;
