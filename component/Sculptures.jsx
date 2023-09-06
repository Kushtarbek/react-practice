import { useState } from "react";
import { sculptureList } from "../utils";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  let hasPrev = index > 0;
  let hasNext = index < sculptureList - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Prev
      </button>
      <h3>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>{sculpture.description}</p>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
      </h3>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>
    </>
  );
}
