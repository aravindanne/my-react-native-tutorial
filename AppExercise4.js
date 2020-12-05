import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import AppButton from "./app/components/AppButton";

export default function AppExercise3(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton title="Login" onPress={() => console.log("Button tapped")} />
    </View>
  );
}
