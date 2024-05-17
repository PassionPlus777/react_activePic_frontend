import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { request } from "@/utils";
import { SignInDataTypes } from "@/types";

import { showMessage } from "./messageSlice";

// Define a type for the slice state
interface AuthState {
  loginStatus: boolean;
  error: { content?: string; datetime: number };
}

// Define the initial state using that type
const initialState: AuthState = {
  loginStatus: false,
  error: { content: "", datetime: 0 },
};

export const signIn = createAsyncThunk<
  boolean,
  SignInDataTypes,
  { rejectValue: string }
>(
  "users/login",
  async (
    { email, password }: SignInDataTypes,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await request({
        method: "POST",
        url: "/users/login",
        data: {
          email,
          password,
        },
      });

      dispatch(
        showMessage({
          datetime: Date.now(),
          type: "success",
          content: "Log in successfully",
        })
      );

      localStorage.setItem("axios_token", res.data.token);
      return true; // Explicitly return true
    } catch (error: any) {
      dispatch(
        showMessage({
          datetime: Date.now(),
          type: "error",
          content: error.response.data.errors[0].message,
        })
      );
      return rejectWithValue("Login faild"); // Reject with value (you can customize the error message)
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.loginStatus = action.payload;
      }
    );
  },
});

export default authSlice.reducer;
