import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/register/RegisterSlice.js";
import loginReducer from "../features/Login/LoginSlice.js";


export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
}); 
