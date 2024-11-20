import { createSlice } from "@reduxjs/toolkit";

const createNewReducer = ({ name, initialState }) => {
  const newSlice = createSlice({
    name,
    initialState,
    reducers: {
      setNewReducer(state, action) {
        return action.payload;
      },
    },
  });

  const newReducer = newSlice.reducer;

  const { setNewReducer } = newSlice.actions;

  const getNewReducer = (state) => {
    return state[name];
  };

  return [newReducer, setNewReducer, getNewReducer];
};

export { createNewReducer };
