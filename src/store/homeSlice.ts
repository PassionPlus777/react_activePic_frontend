import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { HomeSlice } from "@/types";
import { request } from "@/utils";

// import { showMessage } from "./messageSlice";

// Define the initial state using that type
const initialState: HomeSlice = {
  docs: [],
  totalDocs: 0,
  limit: 0,
  totalPages: 0,
  page: 0,
  pagingCounter: 0,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: 0,
  nextPage: 0,
};

export const fetchAllEvents = createAsyncThunk("/races", async () => {
  try {
    const res = await request({ method: "GET", url: "/races" });
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<HomeSlice>) => {
    builder.addCase(
      fetchAllEvents.fulfilled,
      (state, action: PayloadAction<HomeSlice>) => {
        state.docs = action.payload.docs;
        state.totalDocs = action.payload.totalDocs;
        state.limit = action.payload.limit;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.page;
        state.pagingCounter = action.payload.pagingCounter;
        state.hasPrevPage = action.payload.hasPrevPage;
        state.hasNextPage = action.payload.hasNextPage;
        state.prevPage = action.payload.prevPage;
        state.nextPage = action.payload.nextPage;
      }
    );
  },
});

export default homeSlice.reducer;
