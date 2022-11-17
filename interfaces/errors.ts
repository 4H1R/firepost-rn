export interface IError {
  message: string;
  status: number;
}

export interface IUnprocessableEntity<T extends Record<string, any>>
  extends IError {
  errors: T;
}
