import LoginComponent from "@/components/LoginComponent";

import { useAppDispatch } from "@/store";
import { SignInData } from "@/types";

import { signIn } from "@/store/authSlice";

function LoginPage() {
  const dispatch = useAppDispatch();

  const dispatchSignIn = (data: SignInData) => {
    dispatch(signIn(data));
  };

  return <LoginComponent dispatchSignIn={dispatchSignIn} />;
}

export default LoginPage;
