import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Screen from "./app/screens/Screen";
import {
  presentNotificationAsync,
  scheduleNotificationAsync,
} from "expo-notifications";

// sending local notifications.

function AppExercise14(props) {
  const showNotification = () => {
    // presentNotificationAsync({
    //   title: "Congratulations",
    //   body: "your order is successfully placed..",
    //   data: {
    //     _displayInForeground: true,
    //   },
    // });

    scheduleNotificationAsync(
      {
        title: "Delayed notif",
        body: "Example for Scheduled notification",
        data: {
          _displayInForeground: true,
        },
      },
      {
        time: new Date().getTime() + 2000,
      }
    );
  };
  return (
    <Screen>
      <Button title="Tap me" onPress={showNotification} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppExercise14;
