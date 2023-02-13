import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    getUser(state, action) {
      state.users = [];
      state.users.push(...action.payload);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
