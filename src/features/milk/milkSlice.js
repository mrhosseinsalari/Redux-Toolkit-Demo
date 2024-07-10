import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfMilks: 10,
};

const milkSlice = createSlice({
  name: "milk",
  initialState,
  reducers: {
    buyMilk: (state) => {
      state.numOfMilks -= 1;
    },
  },
});

export const { buyMilk } = milkSlice.actions;

export default milkSlice.reducer;
