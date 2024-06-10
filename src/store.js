import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./features/authentication/api/authApi";
import authSliceReducer from "./features/authentication/slice/authSlice";
import { kebeleApi } from "./features/kebele/kebeleApi";
import { applyApi } from "./features/apply/api/applyApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [kebeleApi.reducerPath]: kebeleApi.reducer,
    [applyApi.reducerPath]: applyApi.reducer,

    auth: authSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      kebeleApi.middleware,
      applyApi.middleware
    ),
  devTools: true,
});

setupListeners(store.dispatch);
// const handleLogout = () => {
//   const state = store.getState().auth.token;
//   if (state === null && store.getState().auth.isAuthenticated) {
//     store.dispatch(logout());
//   }
// };
// handleLogout();
// const unsubscribe = store.subscribe(handleLogout);

// unsubscribe();
