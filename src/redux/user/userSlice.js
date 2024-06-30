// slice -used to build states using redux toolkit
// 1. Initial State
// 2. Reducers

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAunticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer: userReducer, actions } = userSlice; //redeucer is renamed to userreducer

export const { setIsAunticated, setUser } = actions;
export default userReducer;
