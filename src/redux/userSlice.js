import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  image: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      //   console.log(action.payload.dada);
      state._id = action.payload.dataSend._id;
      state.firstName = action.payload.dataSend.firstName;
      state.lastName = action.payload.dataSend.lastName;
      state.email = action.payload.dataSend.email;
      state.image = action.payload.dataSend.image;
    },
    logOutRedux: (state, action) => {
      //   console.log(action.payload.dada);
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
    },
  },
 });

export const { loginRedux,logOutRedux } = userSlice.actions;
export default userSlice.reducer;
