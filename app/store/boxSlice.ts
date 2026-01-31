import { createSlice } from "@reduxjs/toolkit";

const boxSlice = createSlice({
  name: "box",
  initialState: {
    size: 100,
    color: "dodgerblue",
  },
  reducers: {
    increaseSize: (state) => {
      state.size += 20;
    },
    decreaseSize: (state) => {
      if (state.size > 40) {
        state.size -= 20;
      }
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {
  increaseSize,
  decreaseSize,
  setSize,
  changeColor,
} = boxSlice.actions;

export default boxSlice.reducer;
