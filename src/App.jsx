import { useState } from "react";

import { RangeField, RangeDial, RangeIndicator } from "./style";

const App = () => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleMouseDown = () => {
    setIsDraggable(true);
  };

  const handleMouseMove = () => {};

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
          style={{ width: rangeValue }}
          className={RangeDial}
        ></div>
      </div>
      <p className={RangeIndicator}>0</p>
    </>
  );
};

export { App };
