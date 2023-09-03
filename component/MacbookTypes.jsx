import React from "react";

function MacbookTypes({ name, img, specs, screensize }) {
  //First Step: Destructuring within the body of the function
  //const { img, name, desc, price} = props ;
  return (
    <div>
      <h5>Name: {name}</h5>
      <img src={img} alt="macbook" width={200} height={200} />
      <h5>Specs: {specs}</h5>
      <h5>Screen: {screensize}</h5>

      <hr />
      {/* <h2>MacBook Pro:</h2>
      <h2>MacBook Air Max:</h2>
      <h2>MacBook Air:</h2> */}
    </div>
  );
}

export default MacbookTypes;
