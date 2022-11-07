import { createSlice } from "@reduxjs/toolkit";
import { login } from "../api";

const initialState = {
  user: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
