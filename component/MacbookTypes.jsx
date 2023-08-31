import React from "react";

function MacbookTypes({ specs, screensize }) {
  return (
    <div>
      <h2>MacBook Pro Max:</h2>
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-silver-m1-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638576254000"
        width="300"
        height="300"
        alt="macbookpro"
        specs={specs}
      />
      <h4>14 inch 32 GB</h4>
      <hr />
      {/* <h2>MacBook Pro:</h2>
      <h2>MacBook Air Max:</h2>
      <h2>MacBook Air:</h2> */}
    </div>
  );
}

export default MacbookTypes;
