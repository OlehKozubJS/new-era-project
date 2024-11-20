import { useSelector, useDispatch } from "react-redux";

import { ReducerComponentBase } from "./ReducerComponentBase";

import { setCommonReducer, getCommonReducer } from "./slice";

const ReducerComponent = ({ children, reducers, blacklist, whitelist }) => {
  const dispatch = useDispatch();

  const store = useSelector();

  return <ReducerComponentBase>{children}</ReducerComponentBase>;
};

export { ReducerComponent };
