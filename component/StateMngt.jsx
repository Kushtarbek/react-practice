import React, { useState } from "react";

const State = () => {
  const [text, setText] = useState("black");
  const [color, setColor] = useState("black");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleBtnClick = (e) => {
    setColor(text);
  };

  return (
    <div>
      <p style={{ color: color }}>Progressively effective resources via business metrics.</p>
      <br />
      <div className="inputBtn-container">
        <input type="text" className="input" value={text} onChange={handleInputChange}>
          <button className="btn" onClick={handleBtnClick}>
            Change text color
          </button>
        </input>
      </div>
    </div>
  );
};

export default State;
