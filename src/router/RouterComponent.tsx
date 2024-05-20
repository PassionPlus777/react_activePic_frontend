import { useEffect } from "react";
import AuthRouter from "./AuthRouter";
import UnAuthRouter from "./UnAuthRouter";

import { useAppDispatch, useAppSelector } from "@/store";
import { getMe } from "@/store/authSlice";

const Router = () => {
  const { loginStatus } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  if (loginStatus) return <AuthRouter />;
  else return <UnAuthRouter />;
};

export default Router;
