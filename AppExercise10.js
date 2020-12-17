//bottom tab navigator example
import React from "react";
import { Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen from "./app/screens/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  );
};
const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets!!!!!!, I am in first page</Text>
    {/* <Button
      title="press me"
      onPress={() => navigation.navigate("TweetDetails")}
    /> 
    // you can replace this navigation props with useNavigation() hook as you can see in <Link /> */}
    <Link />
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details, {route.params.id} </Text>
    {/* or do useRoute() hook to use the params. */}
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
      headerShown: true, //false => the header will disappear
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
        headerShown: false, //false => the header will disappear
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "dodgerblue",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);
function AppExercise10(props) {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default AppExercise10;
