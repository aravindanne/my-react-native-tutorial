import { registerRootComponent } from "expo";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "./Screen";
import Icon from "../components/Icon";
import colors from "../config/color";
import color from "../config/color";
import ListItemSeparator from "../components/ListItemSeparator";
import { useContext } from "react";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, logout } = useAuth(); // useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/background.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              subTitle={item.subTitle}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <View>
        <ListItem
          onPress={handleLogout}
          title="logout"
          ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: "#fff",
  },
});
export default AccountScreen;
