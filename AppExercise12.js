import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

// Detecting Network Status
export default function AppExercise12() {
  // The fetch method is called only once. but we need to check if the internet is available or not frequently, so use "addEventListener"
  // NetInfo.fetch().then((netInfo) => console.log(netInfo));

  // componentDidMount
  const unsubscribe = NetInfo.addEventListener((netInfo) =>
    console.log(netInfo)
  );

  // componentWillUmount
  unsubscribe();

  // OR

  const netInfo = useNetInfo(); // This hook will maintain the subscribe and unsubscribe options.

  return null;
}
