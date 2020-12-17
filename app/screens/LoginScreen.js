import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "./Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import authApi from "../api/auth";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (loginInfo) => {
    const result = await authApi.login(loginInfo.email, loginInfo.password);
    console.log(result);

    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    login(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email/password" visible={loginFailed} />
        <AppFormField
          name="email"
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress" //only for iOS, autofill from keychain
        />

        <AppFormField
          name="password"
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="password" //only for iOS, autofill from keychain
          secureTextEntry
          // onChangeText={handleChange("password")}
          // onBlur={() => setFieldTouched("password")}
        />
        <SubmitButton title="Login" />
      </AppForm>
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
