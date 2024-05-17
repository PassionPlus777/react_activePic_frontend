import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MessageDataTypes } from "@/types";

// Define a type for the slice state

// Define the initial state using that type
const initialState: MessageDataTypes = {
  status: false,
  type: "info",
  content: "",
};

export const messageSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showMessage: (
      state: MessageDataTypes,
      action: PayloadAction<MessageDataTypes>
    ) => {
      state = { ...action.payload };
    },
  },
});

export default messageSlice.reducer;
