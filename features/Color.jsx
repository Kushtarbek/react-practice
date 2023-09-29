import { useState } from "react"; // useState() hook
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../features/color";

const ChangeColor = () => {
  const [color, setColor] = useState("");

  // Accessing the dispatch function from react-redux
  const dispatch = useDispatch();

  // Accessing the theme color value from the Redux store
  const themeColor = useSelector((state) => state.theme.value);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleButtonClick = () => {
    dispatch(changeColor(color));
  };

  return (
    <div style={{ color: themeColor }}>
      <p>Progressively effective resources via business metrics.</p>
      <br />
      <div className="inputBtn-container">
        <input type="text" className="input" onChange={handleColorChange} />
        <button className="btn" onClick={handleButtonClick}>
          Change color text
        </button>
      </div>
    </div>
  );
};

export default ChangeColor;
