import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  items: [],
};

const blogslice = createSlice({
  name: "blogs",
  initialState: initialstate,
  reducers: {
    addblog(state, action) {
      state.items.unshift(action.payload);
    },
    removeblog(state, action) {
      const userid = action.payload;
      const blog = state.items.find((item) => item.creatorid === userid);
      if (!blog) {
        state.iserror = true;
        return;
      }
      state.items = state.items.filter((item) => item.creatorid !== userid);
    },
    replaceblog(state, action) {
      const userid = action.payload.id;
      const blog = state.items.findIndex((item) => item.creatorid === userid);
      state.items[blog] = action.payload.text;
    },
  },
});

export const blogsliceactions = blogslice.actions;
export default blogslice.reducer;
