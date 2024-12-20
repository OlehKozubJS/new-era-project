import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { useState } from "react";

import { getStoreAndPersistor } from "./store";

const ReducerComponentBase = ({ children, reducers, blacklist, whitelist }) => {
  const [{ store, persistor }] = useState(
    getStoreAndPersistor({ reducers, blacklist, whitelist })
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export { ReducerComponentBase };
