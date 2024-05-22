import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import qs from "qs";

// import { fetchAllEvents } from "@/store/homeSlice";

import { request } from "@/utils";
import { SignInData } from "@/types";

import { showMessage } from "./messageSlice";

// Define a type for the slice state
interface AuthState {
  loginStatus: boolean;
  user: {
    id: string;
    role: string;
    email: string;
    ownedRaces: any;
  };
  error: { content?: string; datetime: number };
}

// Define the initial state using that type
const initialState: AuthState = {
  loginStatus: false,
  user: {
    id: "",
    role: "",
    email: "",
    ownedRaces: [],
  },
  error: { content: "", datetime: 0 },
};

export const getMe = createAsyncThunk<any, void, { rejectValue: string }>(
  "users/me",
  async (_, { rejectWithValue }) => {
    try {
      const res = await request({
        method: "GET",
        url: "/users/me",
      });

      if (res.data.user.ownedRaces.length) {
        const idArray = res.data.user.ownedRaces.map(
          (race: any) => race.galleryConfig.eventLogo
        );

        const query = {
          id: {
            in: [...idArray],
          },
        };

        const stringifiedQuery = qs.stringify(
          {
            where: query, // ensure that `qs` adds the `where` property, too!
          },
          { addQueryPrefix: true }
        );

        const result = await request({
          method: "GET",
          url: `/siteAssets${stringifiedQuery}`,
        });

        if (result.data.docs.length) {
          const tempData = res.data.user;
          tempData.ownedRaces = tempData.ownedRaces.map((race: any) => {
            return {
              ...race,
              image: result.data.docs.filter(
                (doc: any) => doc.id === race.galleryConfig.eventLogo
              )[0],
            };
          });
          return tempData;
        }
      }

      return res.data.user; // Return the response data
    } catch (error: any) {
      // Use rejectWithValue to return a custom payload as the rejected action
      return rejectWithValue("Login failed"); // Customize the error message
    }
  }
);

export const signIn = createAsyncThunk<
  boolean,
  SignInData,
  { rejectValue: string }
>("users/login", async ({ email, password }, { dispatch, rejectWithValue }) => {
  try {
    const res = await request({
      method: "POST",
      url: "/users/login",
      data: {
        email,
        password,
      },
    });

    localStorage.setItem("axios_token", res.data.token);

    if (res.data.user.ownedRaces.length) {
      const idArray = res.data.user.ownedRaces.map(
        (race: any) => race.galleryConfig.eventLogo
      );

      const query = {
        id: {
          in: [...idArray],
        },
      };

      const stringifiedQuery = qs.stringify(
        {
          where: query, // ensure that `qs` adds the `where` property, too!
        },
        { addQueryPrefix: true }
      );

      const result = await request({
        method: "GET",
        url: `/siteAssets${stringifiedQuery}`,
      });

      if (result.data.docs.length) {
        const tempData = res.data.user;
        tempData.ownedRaces = tempData.ownedRaces.map((race: any) => {
          return {
            ...race,
            image: result.data.docs.filter(
              (doc: any) => doc.id === race.galleryConfig.eventLogo
            )[0],
          };
        });
        return tempData;
      }
    }

    dispatch(
      showMessage({
        datetime: Date.now(),
        type: "success",
        content: "Log in successfully",
      })
    );

    return res.data.user; // Explicitly return true
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
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder
      .addCase(signIn.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.loginStatus = true;
      })
      .addCase(getMe.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.loginStatus = true;
      });
  },
});

export default authSlice.reducer;
