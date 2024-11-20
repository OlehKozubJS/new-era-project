import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "commonReducer",
  initialState: { state: {} },
  reducers: {
    setCommonReducer(state, action) {
      return { state: action.payload };
    },
  },
});

const { reducer } = slice;

const { setState } = slice.actions;

const getState = ({ state }) => {
  return state;
};

export { reducer, setState, getState };
