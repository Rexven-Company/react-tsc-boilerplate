import { AxiosResponse } from "axios";
import httpClient from "../utils/httpClient";

const member = "/api/v1/members"
class MemberService {
  responseBody = (response: AxiosResponse) => response.data;
  //return user detail ınfo
  public async getMemberInfo() {
    const { data } = await httpClient.get(`${member}`);
    return data
  }
  //updates user name,lastname
  public async updateUserInfo(updateUserInfoData: { name: string, lastname: string }) {
    const { data } = await httpClient.patch(`${member}`, updateUserInfoData);
    return data
  }

  //returns members available courses
  public async getMemberCourses() {
    const { data } = await httpClient.get(`${member}/courses`)
    return data
  }

  //returns members available courses
  public async getBillingAddress() {
    const { data } = await httpClient.get(`${member}/bills`)
    return data
  }
  //returns members available courses
  public async updateBillingAddress(updateBillingAddressData: {
    title?: string;
    firstName?: string;
    lastName?: string;
    gsmNumber?: string;
    identityNumber?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    country?: string;
    zipCode?: string;
    isCorporate?: boolean;
    vatNumber?: string;
    companyName?: string;
    taxOffice?: string;
  }) {
    const { data } = await httpClient.patch(`${member}/bills`, updateBillingAddressData)
    return data
  }

  public async updateMemberPassword(updateMemberPasswordData: { oldPassword: string, newPassword: string, newPasswordConfirm: string }) {
    const { data } = await httpClient.patch(`${member}/update-password`, updateMemberPasswordData)
    return data
  }

  public async getUserPackages() {
    const { data } = await httpClient.get(`${member}/packages`)
    return data
  }

  public async cancelUserPackages() {
    const { data } = await httpClient.post(`${member}/cancel-packages`)
    return data
  }
}

export default new MemberService();
