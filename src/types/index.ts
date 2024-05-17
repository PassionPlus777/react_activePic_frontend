export interface SignInDataTypes {
  email?: string;
  password?: string;
  remember?: string;
}

export interface SignFuncTypes {
  dispatchSignIn: CallableFunction;
}

export interface MessageDataTypes {
  datetime: number;
  type: "info" | "success" | "error";
  content: string;
}
