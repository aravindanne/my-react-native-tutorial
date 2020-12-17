import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "./Screen";

import Button from "../components/AppButton";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import { useState } from "react";
import { useEffect } from "react";
import AppText from "../components/AppText";
import useApi from "../hooks/useApi";
// import ActivityIndicator from "../components/ActivityIndicator";

// const listings = [
//   {
//     id: 1,
//     title: "Red Jacket for sale!",
//     price: 100,
//     image: require("../assets/background.jpg"),
//   },
//   {
//     id: 2,
//     title: "Easy chair",
//     price: 20,
//     image: require("../assets/background.jpg"),
//   },
// ];
function ListingsScreen({ navigation }) {
  const { data: listings, error, isLoading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}

      <ActivityIndicator animating={isLoading} size="large" />
      {/* <ActivityIndicator visible={isLoading} />  Custom activity indicator */}

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
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
