import { AxiosResponse } from "axios";
import { LoginDataInterface, RegisterDataInterface } from "../context/AuthContext";

import httpClient from "../utils/httpClient";

class AuthService {
  responseBody = (response: AxiosResponse) => response.data;

  //register user
  public async register(registerData: RegisterDataInterface) {
    const { data } = await httpClient.post(`/api/v1/auth/register`, registerData);
    return data
  }

  //login User
  public async login(loginData: LoginDataInterface) {
    const { data } = await httpClient.post(`/api/v1/auth/login`, loginData);
    return data
  }

  //forget-password ends e-mail 
  public async asyncforgetPassword(forgetPasswordData: { email: string }) {
    const { data } = await httpClient.post(`/api/v1/auth/forget-password`, forgetPasswordData);
    return data
  }

  //reset-password changes password by token
  public async resetPassword(resetPasswordData: { password: string, passwordConfirm: string, firstName?: string, lastName?: string }, token: string) {
    const { data } = await httpClient.patch(`/api/v1/auth/reset-password/${token}`, resetPasswordData);
    return data
  }

  //forgetPassword
  public async forgetPassword(forgetPasswordData: { email: string }) {
    const { data } = await httpClient.post(`api/v1/auth/forget-password`, forgetPasswordData)
    return data
  }
  //check Auth. of User
  public async getSession() {
    const { data } = await httpClient.get(`/api/v1/auth/session`);
    return data
  }

  // logout user
  public async logoutUser(page?: string) {
    const { data } = await httpClient.get(`/api/v1/auth/logout`);
    return data
  }
}

export default new AuthService();
