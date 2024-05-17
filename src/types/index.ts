export interface SignInDataTypes {
  email?: string;
  password?: string;
  remember?: string;
}

export interface SignFuncTypes {
  dispatchSignIn: CallableFunction;
}

export interface MessageTypes {
  status: boolean;
  type: string;
  content: string;
}
