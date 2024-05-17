import AuthRouter from "./AuthRouter";
import UnAuthRouter from "./UnAuthRouter";

import { useAppSelector } from "@/store";

const Router = () => {
  const { loginStatus } = useAppSelector((state) => state.auth);

  if (loginStatus) return <AuthRouter />;
  else return <UnAuthRouter />;
};

export default Router;
