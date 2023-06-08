import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  return await AsyncStorage.setItem("@" + key, JSON.stringify(value));
};

export const getItem = async (key) => {
  try {
    return JSON.parse(await AsyncStorage.getItem("@" + key));
  } catch (error) {
    return null;
  }
};
