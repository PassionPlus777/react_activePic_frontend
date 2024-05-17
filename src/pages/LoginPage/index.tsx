import { signIn } from "@/store/authSlice";
import { useAppDispatch } from "@/store";

import { SignInTypes } from "@/types";
import LoginComponent from "@/components/LoginComponent";

function LoginPage() {
  const dispatch = useAppDispatch();

  const dispatchSignIn = (data: SignInTypes) => {
    dispatch(signIn(data));
  };

  return <LoginComponent dispatchSignIn={dispatchSignIn} />;
}

export default LoginPage;
