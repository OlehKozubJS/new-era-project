import { useSelector, useDispatch } from "react-redux";

import ReducerComponentBase

const ReducerComponent = ({ children, reducers, blacklist, whitelist }) => {
  const [{ store, persistor }] = useState(
    getStoreAndPersistor({ reducers, blacklist, whitelist })
  );

  return <ReducerComponentBase></ReducerComponentBase>;
};

export { ReducerComponent };
