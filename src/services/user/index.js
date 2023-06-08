import { axiosInstance } from "../../api/axios";

async function login({ email, password }) {
  try {
    const response = await axiosInstance.post(`user/login`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const user = {
  login,
};
