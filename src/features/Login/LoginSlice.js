import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User_API_URL } from "../../API_URL";


export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (userData, { rejectWithValue }) => {
    console.log("Login data sent:", userData);
    try {
      const res = await axios.post(User_API_URL + "/login", userData, { withCredentials: true });
      console.log("Login response received:", res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login Failed");
    }
  }
);


const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      state.email = "";
      state.password = "";
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        console.log("Login successful:", action.payload.user.role);
        if (action.payload?.token) {
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("role", action.payload.user.role);
        }

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        console.log("Login error:", action.payload);
      });
  },
});

export const { setField, resetForm } = loginSlice.actions;
export default loginSlice.reducer;

