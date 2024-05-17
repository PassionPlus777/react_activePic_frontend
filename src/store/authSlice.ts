import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { request } from "@/utils";
import { SignInTypes } from "@/types";

// ... (other imports remain the same)

// Define a type for the slice state
interface AuthState {
  loginStatus: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  loginStatus: false,
};

export const signIn = createAsyncThunk<
  boolean,
  SignInTypes,
  { rejectValue: string }
>(
  "users/login",
  async ({ email, password }: SignInTypes, { rejectWithValue }) => {
    try {
      const res = await request({
        method: "POST",
        url: "/users/login",
        data: {
          email,
          password,
        },
      });
      if (res.status === 200) {
        localStorage.setItem("axios_token", res.data.token);
        return true; // Explicitly return true
      }
      return false; // Explicitly return false
    } catch (error) {
      console.error(error);
      // Reject with value (you can customize the error message)
      return rejectWithValue("Failed to login");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder
      .addCase(signIn.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.loginStatus = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        // Handle the rejected case, action.payload will be the value from rejectWithValue
        console.error("Login failed:", action.payload);
        state.loginStatus = false;
      });
  },
});

export default authSlice.reducer;
