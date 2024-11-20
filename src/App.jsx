import { useState } from "react";

import { RangeField, RangeDial, RangeIndicator } from "./style";

const App = () => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = (event) => {
    setIsDraggable(true);
    setMouseDownX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (isDraggable) {
      const currentRangeValue = rangeValue;
      const mouseMoveX = event.clientX;
      const newRangeValue = currentRangeValue - mouseMoveX + mouseDownX;

      if (newRangeValue >= 0 && newRangeValue <= 450) {
        setRangeValue(newRangeValue);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Progress Always Wins!</h2>
      <p>I am back.</p>

      <div className={RangeField}>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ left: rangeValue }}
          className={RangeDial}
        ></div>
      </div>
      <p className={RangeIndicator}>{rangeValue}</p>
      <div>This is a new div component</div>
    </>
  );
};

export { App };
