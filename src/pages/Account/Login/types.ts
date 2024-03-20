export interface ILogin {
  accessToken: string;
  expires: number;
  refreshToken: string;
}

export interface ILoginResponse {
  data: ILogin;
}
