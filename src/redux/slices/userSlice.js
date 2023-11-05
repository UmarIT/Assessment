import {createSlice} from '@reduxjs/toolkit';

const userSlicer = createSlice({
  name: 'user',
  initialState: {
    userData: {},
    userfound: false,
    token: null,
    isChangePassword: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUserSignUp: (state, action) => {
      state.userData = action.payload;
    },

    setUserLogin: (state, action) => {
      state.userfound = action.payload;
    },
  },
});

export const {setToken, setUser, setUserSignUp, setUserLogin} =
  userSlicer.actions;

export default userSlicer.reducer;
