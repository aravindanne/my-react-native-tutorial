//bottom tab navigator example
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import { useState } from "react";
import AuthContext from "./app/auth/context";
import { navigationRef } from "./app/navigation/rootNavigation";
import authStorage from "./app/auth/storage";
import { AppLoading } from "expo";

function AppExercise11() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (!user) return;
    setUser(user); // setUser(jwtDecode(user)); decode the token and set it to setUser
  };

  // useEffect(() => {
  //   restoreUser();
  // }, []);

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        {/* <AuthNavigator /> this is exercise 11 */}
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default AppExercise11;
