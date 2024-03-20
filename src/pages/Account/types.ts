export interface IUser {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface ILogout {
  refreshToken: string;
}

export interface IAccountInfo {
  code: number;
  message: string;
}
