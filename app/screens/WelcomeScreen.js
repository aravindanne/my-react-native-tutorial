import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import App from "../../App";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* <View style={styles.loginButton}></View> */}

        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        {/* <View style={styles.registerButton}></View> */}
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Login")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  // loginButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: "#39bdff",
  // },
  // registerButton: {
  //   width: "100%",
  //   height: 70,
  //   backgroundColor: "orange",
  // },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
