import { useEffect } from "react";
import navigation from "../navigation/rootNavigation";
import {
  getExpoPushTokenAsync,
  addPushTokenListener,
} from "expo-notifications";
import * as Permissions from "expo-permissions";
import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = () => {
  useEffect(() => {
    registerForPushNotifications();

    addPushTokenListener((notification) => {
      console.log("Tapped notification: ", notification);
      navigation.navigate("Account");
    });
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
      console.log("The notification token is: ", token);
    } catch (error) {
      console.log("Error on notification: ", error);
    }
  };
};
