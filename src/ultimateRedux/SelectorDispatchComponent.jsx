import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setState, getState } from "./slice";

const SelectorDispatchComponent = ({ newState, getNewState }) => {
  const dispatch = useDispatch();

  const state = useSelector(getState);

  useEffect(() => {
    if (newState) {
      dispatch(setState(newState));
    }
  }, []);

  useEffect(() => {
    getNewState(state);
  }, []);

  return <div></div>;
};

export { SelectorDispatchComponent };
