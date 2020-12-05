import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import Screen from "./Screen";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale!",
    price: 100,
    image: require("../assets/background.jpg"),
  },
  {
    id: 2,
    title: "Easy chair",
    price: 20,
    image: require("../assets/background.jpg"),
  },
];
function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "grey",
  },
});
export default ListingsScreen;
