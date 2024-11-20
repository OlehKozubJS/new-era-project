import { useSelector, useDispatch } from "react-redux";

import { ReducerComponentBase } from "./ReducerComponentBase";

import { setCommonReducer, getCommonReducer } from "./slice";

const ReducerComponent = ({ children }) => {
  const dispatch = useDispatch();

  const store = useSelector(getCommonReducer);

  return <ReducerComponentBase>{children}</ReducerComponentBase>;
};

export { ReducerComponent };
