import React from "react";
import { View, StyleSheet } from "react-native";
import color from "../config/color";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  //   console.log(netInfo);
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: color.white,
  },
});

export default OfflineNotice;
