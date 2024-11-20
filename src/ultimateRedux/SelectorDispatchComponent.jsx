import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setCommonReducer, getCommonReducer } from "./slice";

const SelectorDispatchComponent = ({ setState, getState }) => {
  const dispatch = useDispatch();

  const state = useSelector(getCommonReducer);

  useEffect(() => {
    if (setState) {
      dispatch(setCommonReducer(setState));
    }
  }, []);

  useEffect(() => {
    getState(state);
  }, []);

  return <div></div>;
};

export { SelectorDispatchComponent };
