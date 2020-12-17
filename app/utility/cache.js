import { AsyncStorage } from "react-native";
import dayjs from "dayjs";
// import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;
const store = async (key, value) => {
  try {
    const item = {
      value: value,
      timestampe: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log("Error in calling async cache storage - ", error);
  }
};

const isExpired = (item) => {
  const now = dayjs(); // moment(Date.now());
  const storedTime = dayjs(item.timestamp); // moment(item.timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Separation(CQS)
      AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default { store, get };
