import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "reducer0",
  initialState: { state: {} },
  reducers: {
    setState(state, action) {
      return { state: action.payload };
    },
  },
});

const { reducer0 } = slice.reducer;

const { setState } = slice.actions;

const getState = ({ state }) => {
  return state;
};

export { reducer0, setState, getState };
