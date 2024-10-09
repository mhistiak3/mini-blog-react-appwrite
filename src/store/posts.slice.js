import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
  },
})

export const { getPosts } = postSlice.actions;

const postReducer = postSlice.reducer;
export default postReducer;
