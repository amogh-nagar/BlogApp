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
      console.log(userid);
      const blog = state.items.find((item) => {
        console.log(typeof item.id);
        return item.id == userid.toString()});
      if (!blog) {
        state.iserror = true;
        return;
      }
      console.log(blog);
      state.items = state.items.filter((item) => item.id !== userid.toString());
    },
    replaceblog(state, action) {
      const userid = action.payload.id;
      const blog = state.items.findIndex((item) => item.id === userid.toString());
      state.items[blog] = {id:userid,text:action.payload.text};
    },
  },
});

export const blogsliceactions = blogslice.actions;
export default blogslice.reducer;
