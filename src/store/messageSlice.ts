import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MessageData } from "@/types";

// Define a type for the slice state

// Define the initial state using that type
const initialState: MessageData = {
  datetime: 0,
  type: "info",
  content: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    showMessage: (state: MessageData, action: PayloadAction<MessageData>) =>
      action.payload,
  },
});

export const { showMessage } = messageSlice.actions;

export default messageSlice.reducer;
