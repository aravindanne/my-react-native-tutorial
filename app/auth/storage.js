import * as SecureStore from "expo-secure-store";

const key = "authToken";
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(authToken));
  } catch (error) {
    console.log("Error storing the auth token - ", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error fetching the auth token - ", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error removing token: ", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (token) {
    return token; // return jwtDecode(token); => return the decoded token.
  }
  return null;
};

export default {
  storeToken,
  getUser,
  removeToken,
  getToken,
};
