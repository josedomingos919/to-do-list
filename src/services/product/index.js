import { axiosInstance } from "../../api/axios";

async function getByCategory({ categoryId, search }) {
  try {
    const response = await axiosInstance.get(
      `product/search?categoryId=${categoryId}&search=${search}`
    );

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getCategory() {
  try {
    const response = await axiosInstance.get(`product/category`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const product = {
  getCategory,
  getByCategory,
};
