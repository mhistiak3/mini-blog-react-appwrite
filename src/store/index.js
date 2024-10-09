import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import postReducer from "./posts.slice";

// Store
const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
});

export default store