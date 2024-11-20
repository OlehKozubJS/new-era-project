import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "commonReducer",
  initialState: { state },
  reducers: {
    setCommonReducer(state, action) {
      return { state: action.payload };
    },
  },
});

const commonReducer = commonSlice.reducer;

const { setCommonReducer } = commonSlice.actions;

const getCommonReducer = ({ state }) => {
  return state;
};

export { commonReducer, setCommonReducer, getCommonReducer };
