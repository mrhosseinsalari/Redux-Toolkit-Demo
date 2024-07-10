import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.numOfCakes -= action.payload;
    },
  },
});

// immerjs => that allow us to mutate state !!

export const { buyCake } = cakeSlice.actions;

export default cakeSlice.reducer;
