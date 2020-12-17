import React from "react";
import { AsyncStorage } from "react-native";

// AsyncStorage
export default function AppExercise13() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log("Error at AsyncStorage: ", error);
    }
  };

  demo();
  return null;
}
