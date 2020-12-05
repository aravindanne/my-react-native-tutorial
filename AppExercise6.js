import React, { useState } from "react";
import { Switch } from "react-native";
import Screen from "./app/screens/Screen";

export default function AppExercise6() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
