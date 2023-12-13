import { USER_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";
import axios from "axios";

export async function login(data) {
  const url = `/${USER_API_PATH}/login`;
  return axiosClient.post(url, data);
}
export async function loginByGoogle(access_token) {
  const url = `https://www.googleapis.com/oauth2/v3/userinfo`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}
