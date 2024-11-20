import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "commonReducer",
  initialState: { state: null },
  reducers: {
    setState(state, action) {
      return { state: action.payload };
    },
  },
});

const reducer = slice.reducer;

const { setState } = slice.actions;

const getState = ({ state }) => {
  return state;
};

export { reducer, setState, getState };
