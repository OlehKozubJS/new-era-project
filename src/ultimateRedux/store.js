import { configureStore } from "@reduxjs/toolkit";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { commonReducer } from "./slice";

const getStoreAndPersistor = () => {
  const store = configureStore({
    reducer: persistReducer({ key: "root", storage }, commonReducer),
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
    },
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export { getStoreAndPersistor };
