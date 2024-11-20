import { useSelector, useDispatch } from "react-redux";

import { ReducerComponentBase } from "./ReducerComponentBase";

const ReducerComponent = ({ children, reducers, blacklist, whitelist }) => {
  const dispatch = useDispatch();

  return <ReducerComponentBase>{children}</ReducerComponentBase>;
};

export { ReducerComponent };
