import axios from "axios";

export async function loginByGoogle(access_token) {
  const url = `https://www.googleapis.com/oauth2/v3/userinfo`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}
export async function checkIp() {
  const url = `https://ipinfo.io/json?token=28bab61ea8c636`;
  return axios.get(url);
}
