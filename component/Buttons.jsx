import React, { useState } from "react";
import Forms from "./Forms";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function ButtonGroup() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  let statuses = ["empty", "typing", "submitting", "success", "error"];

  return (
    <div style={{ backgroundColor }}>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <>
        {statuses.map((status) => {
          <section key={status}>
            <h4>Form: ({status})</h4>
            <Forms status={status} />
          </section>;
        })}
      </>
    </div>
  );
}

export default ButtonGroup;
