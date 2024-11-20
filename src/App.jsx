import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setCommonReducer, getCommonReducer } from "./ultimateRedux";

import { SimplestCustomRange } from "./SimplestCustomRange";

import { RangeIndicator } from "./style";

const App = () => {
  const dispatch = useDispatch();

  const value = useSelector(getCommonReducer).value;

  const clearRangeValue = () => {
    dispatch(setCommonReducer(0));
  };

  return (
    <div>
      <SimplestCustomRange />
      <button type="button" onClick={clearRangeValue}>
        Clear range value
      </button>
      <p className={RangeIndicator}>{value}</p>
    </div>
  );
};

export { App };
