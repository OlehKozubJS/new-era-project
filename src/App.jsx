import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ReducerComponent } from "./ultimateRedux";

import { SimplestCustomRange } from "./SimplestCustomRange";

import { RangeField, RangeDial, RangeIndicator } from "./style";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggable]);

  const clearRangeValue = () => {
    dispatch(0);
  };

  return (
    <div>
      <button type="button" onClick={clearRangeValue}>
        Clear range value
      </button>
      <p className={RangeIndicator}>{rangeValue}</p>
    </div>
  );
};

export { App };
