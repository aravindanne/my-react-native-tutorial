//Stack navigator example
import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Screen from "./app/screens/Screen";

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
    <Text>Tweets</Text>
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

function AppExercise9(props) {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default AppExercise9;
