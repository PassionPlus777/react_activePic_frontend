import RegisterComponent from "@/components/RegisterComponent";

import { useAppDispatch } from "@/store";
import { SignUpData } from "@/types";

import { signUp } from "@/store/authSlice";

function RegisterPage() {
  const dispatch = useAppDispatch();

  const dispatchSignUp = (data: SignUpData) => {
    dispatch(signUp(data));
  };

  return <RegisterComponent dispatchSignUp={dispatchSignUp} />;
}

export default RegisterPage;
