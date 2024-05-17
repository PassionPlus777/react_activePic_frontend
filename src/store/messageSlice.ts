import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

// Define the initial state using that type
const initialState: MessageState = {
  status: false,
  type: "",
  content: "",
};

export const messageSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showMessage: (state: MessageState, action: PayloadAction<MessageState>) => {
      state = { ...action.payload };
    },
  },
});

export default messageSlice.reducer;
