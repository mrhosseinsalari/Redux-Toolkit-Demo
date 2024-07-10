import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk(
  "user/getAsyncUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getAsyncUsers.pending]: (state) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    },
    [getAsyncUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getAsyncUsers.rejected]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
