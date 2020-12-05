import React from "react";
import { Text } from "react-native";
import styles from "./styles";

export default function AppText({ style, children, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

// export default AppText;
