import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authSlice from "./authSlice";
import messageSlice from "./messageSlice";
import homeSlice from "./homeSlice";
import eventSlice from "./eventSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    message: messageSlice,
    home: homeSlice,
    event: eventSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
