import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";

const parseLocalStorageItem = (key) => {
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item);
  } catch (error) {
    console.error(`Error parsing JSON from localStorage key "${key}":`, error);
    return null;
  }
};

const initialState = {
  token: Cookies.get("token") || null,
  isAuthenticated: parseLocalStorageItem("isAuthenticated") || false,
  residentInfo: parseLocalStorageItem("residentInfo") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokenOnLogin: (state, action) => {
      state.token = action.payload.token;
      Cookies.set("token", state.token);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem(
        "residentInfo",
        JSON.stringify(action.payload.resident)
      );
    },
    setTokenOnRegister: (state, action) => {
      state.token = action.payload.token;
      Cookies.set("token", state.token);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem(
        "residentInfo",
        JSON.stringify(action.payload.newResident)
      );
    },
    updateResidentInfo: (state, action) => {
      state.residentInfo = action.payload;
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("residentInfo", JSON.stringify(action.payload.data));
    },
    logout: (state) => {
      state.token = null;
      localStorage.setItem("isAuthenticated", false);
      localStorage.removeItem("residentInfo");
      Cookies.remove("token");
    },
  },
});

export const {
  setTokenOnLogin,
  setTokenOnRegister,
  logout,
  updateResidentInfo,
} = authSlice.actions;

export default authSlice.reducer;
export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectResidentInfo = (state) => state.auth.residentInfo;
