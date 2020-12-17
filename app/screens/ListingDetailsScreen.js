import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import color from "../config/color";
import ListItem from "../components/ListItem";
import { Image } from "react-native-expo-image-cache";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        // source={require("../assets/background.jpg")}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      />
      <View sytle={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/logo.jpg")}
            title="Aravindanne"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: color.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "500",
  },
  subTitle: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;
