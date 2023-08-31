import React from "react";
import MacbookTypes from "./MacbookTypes";

function Computers() {
  return (
    <div>
      <h1>Some MacBook types</h1>
      <MacbookTypes specs={{ chip: "Apple M1 Pro", memory: "32 GB", macOS: "13.0" }} screensize={"14-inch"} />
      <MacbookTypes specs={{ chip: "Apple M1 Pro", memory: "32 GB", macOS: "13.0" }} screensize={"14-inch"} />
    </div>
  );
}

export default Computers;
