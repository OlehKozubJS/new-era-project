import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleEventListener } from "./hooks";

import { setState, getState } from "./ultimateRedux";

import { RangeField, RangeDial } from "./style";

const SimplestCustomRange = () => {
  const dispatch = useDispatch();

  const stateRangeValue = useSelector(getState);

  const [isDraggable, setIsDraggable] = useState(false);
  const [rangeValue, setRangeValue] = useState(stateRangeValue);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = (event) => {
    setIsDraggable(true);
    setMouseDownX(event.clientX);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();

    if (!isDraggable) {
      return;
    }

    const mouseMoveX = event.clientX;

    const newRangeValue = rangeValue + mouseMoveX - mouseDownX;

    if (newRangeValue >= 0 && newRangeValue <= 450) {
      setRangeValue(newRangeValue);
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);

  useEffect(handleEventListener("mouseup", handleMouseUp), [isDraggable]);

  useEffect(() => {
    dispatch(setState(rangeValue));
  }, [rangeValue]);

  useEffect(() => {
    setRangeValue(stateRangeValue);
  }, [stateRangeValue]);

  return (
    <div className={RangeField}>
      <div
        onMouseDown={handleMouseDown}
        style={{ left: rangeValue }}
        className={RangeDial}
      ></div>
    </div>
  );
};

export { SimplestCustomRange };
