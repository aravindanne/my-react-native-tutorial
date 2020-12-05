import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // horizontal axis
        justifyContent: "center", // main axis
        alignItems: "center", // secondary axis
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "orange",
          width: 100,
          // flexBasis: 100, // can map to width and height
          // flex: 1,
          // flexShrink: 1,
          height: 100,
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 50,
          // borderTopWidth: 20,
          // borderTopLeftRadius: 50,
        }}
      />

      <View
        style={{
          backgroundColor: "yellow",
          // flex: 1,
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "relative",
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          // flex: 1,
          width: 100,
          height: 100,
          shadowColor: "grey",
          shodowOffset: { width: 0, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 20,
          padding: 20,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "violet",
            height: 50,
            width: 50,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "grey",
          // flex: 1,
          width: 100,
          height: 100,
          margin: 30,
        }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
