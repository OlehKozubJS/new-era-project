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
    event.preventDefault();

    if (isDraggable) {
      const currentRangeValue = rangeValue;
      const mouseMoveX = event.clientX;
      const newRangeValue = currentRangeValue + mouseMoveX - mouseDownX;

      if (newRangeValue >= 0 && newRangeValue <= 450) {
        setRangeValue(newRangeValue);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  const clearRangeValue = () => {
    setRangeValue(0);
  };

  return (
    <div>
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
      <button type="button" onClick={clearRangeValue}>
        Crear range value
      </button>
      <p className={RangeIndicator}>{rangeValue}</p>
    </div>
  );
};

export { App };
