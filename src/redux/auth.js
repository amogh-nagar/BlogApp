import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  islogin: false,
email:"",
password:""
};

const authslice = createSlice({
  name: 'auth',
  initialState: initialstate,
  reducers: {
    login(state,action) {
      state.islogin = true;
      state.email-=action.payload.email;
      state.password=action.password;
    },
    logout(state) {
      state.islogin = false;
    },
    
  },
});

export const authsliceactions = authslice.actions;
export default authslice.reducer;
