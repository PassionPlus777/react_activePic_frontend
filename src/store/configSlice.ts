import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ConfigData } from "@/types";

// Define the initial state using that type
const initialState: ConfigData = {
  mobileStauts: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setMobileStatus: (state: ConfigData, action: PayloadAction<boolean>) => {
      state.mobileStauts = action.payload;
    },
  },
});

export const { setMobileStatus } = configSlice.actions;

export default configSlice.reducer;
