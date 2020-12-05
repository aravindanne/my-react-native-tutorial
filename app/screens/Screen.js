import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, SafeAreaView } from "react-native";
import color from "../config/color";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingLeft: 50, //doesn't work so add a view
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: color.white,
  },
  view: {},
});

export default Screen;
