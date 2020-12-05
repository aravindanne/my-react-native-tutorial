import React, { useState } from "react";
import Screen from "./app/screens/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: "1" },
  { label: "Clothing", value: "2" },
  { label: "Cameras", value: "3" },
];
export default function AppExercise7() {
  const [category, setCateory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        items={categories}
        icon="apps"
        placeholder="category"
        selectedItem={category}
        onSelectItem={(item) => setCateory(item)}
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
