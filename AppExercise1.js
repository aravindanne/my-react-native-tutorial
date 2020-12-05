import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  View,
  Dimensions,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const handlePress = () => {
    console.log("I am clicked");
  };

  const orientation = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation.landscape ? "100%" : "30%",
        }}
      ></View>

      <Text numberOfLines={4} onPress={handlePress}>
        Hello World!!! Aravindanne ... I keep the long txt in this box. let us
        see what happens when there is a huge text lines. In web, I could see
        this as a single line, but in mobile it has too many lines. Let me
        extend to have multiple lines in the web as well to have multiple lines.
        EOD
      </Text>
      <TouchableHighlight onPress={() => console.log("Image is pressed")}>
        <Image
          source={{
            width: 200,
            height: 300,
            url: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        title="Click me"
        color="orange"
        onPress={() => alert("Button is tapped!")}
      />

      <Button
        title="Click me 2"
        color="orange"
        // onPress={() =>
        //   Alert.alert("My title", "My Message", [
        //     { text: "Yes" }, //you can handle onPress for each button
        //     { text: "No" },
        //   ])
        // }
        onPress={() =>
          Alert.prompt("My title", "My message", (text) =>
            console.log("Entered text is: ", text)
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
