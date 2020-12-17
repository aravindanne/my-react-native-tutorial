import React, { useEffect, useState } from "react";
import Screen from "./app/screens/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Button, Image, Platform, StyleSheet } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

//Using imagePicker

export default function AppExercise8() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
