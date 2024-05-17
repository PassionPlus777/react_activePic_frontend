export interface SignInDataTypes {
  email?: string;
  password?: string;
  remember?: string;
}

export interface SignFuncTypes {
  dispatchSignIn: CallableFunction;
}

export interface MessageDataTypes {
  status: boolean;
  type: "info" | "success" | "error";
  content: string;
}
