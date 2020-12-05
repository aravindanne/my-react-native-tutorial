import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Platform } from "react-native";
import AppText from "./app/components/AppText";

export default function AppExercise3(props) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <AppText>Welcome Aravindanne</AppText>
      <MaterialCommunityIcons name="email" size={60} color="blue" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     color: "dodgerblue",
//     ...Platform.select({
//       ios: {
//         fontSize: 30,
//         fontFamily: "Avenir",
//       },
//       android: {
//         fontSize: 18,
//         fontFamily: "Roboto",
//       },
//     }),
//   },
// });
