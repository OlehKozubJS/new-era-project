import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setState, getState } from "./ultimateRedux";

import { SimplestCustomRange } from "./SimplestCustomRange";

import { RangeIndicator } from "./style";

const App = () => {
  const dispatch = useDispatch();

  const stateRangeValue = useSelector(getState);

  const clearRangeValue = () => {
    dispatch(setState(0));
  };

  return (
    <div>
      <SimplestCustomRange />
      <button type="button" onClick={clearRangeValue}>
        Clear range value
      </button>
      <p className={RangeIndicator}>{stateRangeValue}</p>
    </div>
  );
};

export { App };
