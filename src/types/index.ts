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

export interface HomeSliceState {
  docs: any[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: unknown;
  nextPage: number;
}
