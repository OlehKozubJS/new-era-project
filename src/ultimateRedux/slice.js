import { createSlice } from "@reduxjs/toolkit";

const CommonSlice = createSlice({
  name: "commonReducer",
  initialState: {},
  reducers: {
    setCommonReducer(state, action) {
      return action.payload;
    },
  },
});

const commonReducer = newSlice.reducer;

const { setCommonReducer } = newSlice.actions;

const getCommonReducer = (state) => {
  return state;
};

export { commonReducer, setCommonReducer, getCommonReducer };
