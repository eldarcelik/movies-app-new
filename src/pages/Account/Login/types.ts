export interface ILogin {
  accessToken: string;
  expires: number;
  refreshToken: string;
}

export interface ILoginState {
  accessToken: string | null;
  expires: number | null;
  refreshToken: string | null;
}

export interface ILoginResponse {
  data: ILogin;
}
