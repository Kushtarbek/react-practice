import { useState } from "react"; // useState() hook
import { useSelector } from "react"; // useState() hook
import { changeColor } from "../features/color"; // useState() hook
import { useDispatch } from "react-redux";

const ChangeColor = () => {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div>
      <p>Progressively effective resources via business metrics.</p>
      <br />
      <div className="inputBtn-container">
        <input type="text" className="input" />
        <button className="btn">change color text</button>
      </div>
    </div>
  );
};

export default ChangeColor;
