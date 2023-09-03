import React from "react";
import MacbookTypes from "./MacbookTypes";

function Computers() {
  return (
    <div>
      <h1>Some MacBook types</h1>

      <MacbookTypes
        name={"Apple MacBook Pro"}
        specs={" Apple M1 Pro chip"}
        memory={"32 GB"}
        screensize={"14-inch"}
        img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-silver-m1-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638576254000"
      />
      <MacbookTypes
        name={"Apple MacBook Air"}
        specs={" Apple M1 Pro chip"}
        memory={"316 GB"}
        screensize={"13-inch"}
        img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-space-m1-2021?wid=1200&hei=1200&fmt=jpeg&qlt=95&.v=1638575247000"
      />
    </div>
  );
}

export default Computers;
