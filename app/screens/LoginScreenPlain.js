import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "./Screen";

// LoginScreen with the components which we have already built.
function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <AppTextInput
        placeholder="Email"
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress" //only for iOS, autofill from keychain
        onChangeText={(text) => setEmail(text)}
      />

      <AppTextInput
        placeholder="Password"
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="password" //only for iOS, autofill from keychain
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;
