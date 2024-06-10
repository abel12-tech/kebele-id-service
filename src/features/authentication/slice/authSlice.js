import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: Cookies.get("token") || null,
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  residentInfo: JSON.parse(localStorage.getItem("residentInfo")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      Cookies.set("token", state.token);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem(
        "residentInfo",
        JSON.stringify(action.payload.resident)
      );
    },
    logout: (state) => {
      state.token = null;
      localStorage.setItem("isAuthenticated", false);
      localStorage.setItem("residentInfo", null);
      Cookies.remove("token");
    },
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectResidentInfo = (state) => state.auth.residentInfo;
