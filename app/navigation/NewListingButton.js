import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/color";
import { TouchableOpacity } from "react-native-gesture-handler";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={color.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    borderColor: color.white,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewListingButton;
