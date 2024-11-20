import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "commonReducer",
  initialState: { state: {} },
  reducers: {
    setState(state, action) {
      return { state: action.payload };
    },
  },
});

const reducer = commonSlice.reducer;

const { setState } = commonSlice.actions;

const getState = ({ state }) => {
  return state;
};

export { reducer, setState, getState };
