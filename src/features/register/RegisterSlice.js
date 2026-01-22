import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User_API_URL } from "../../API_URL.js";


const API_URL = User_API_URL;

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(API_URL +"/save", formData);
      return res.data; // ✅ success response
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message || "Register Failed"
      );
    }
  }
);

const initialState = {
  name: "",
  email: "",
  password: "",
  mobile: "",
  address: "",
  city: "",
  gender: "",
  loading: false,
  error: null,
  success: false,
  user: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },

    resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.mobile = "";
      state.address = "";
      state.city = "";
      state.gender = "";
      state.loading = false;
      state.error = null;
      state.success = false;
      state.user = null;
    },
  },

 
  extraReducers: (builder) => {
    builder
     
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })

      
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { setField, resetForm } = registerSlice.actions;

export default registerSlice.reducer;
