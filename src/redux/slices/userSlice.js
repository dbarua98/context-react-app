import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Redux User",
    email: "redux@example.com",
  },
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateUserName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateUser, updateUserName } = userSlice.actions;
export default userSlice.reducer;
