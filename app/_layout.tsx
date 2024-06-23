import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import { Linking } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Create a ref to hold the navigation object
const navigationRef = React.createRef();

function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    // Set up deep linking handling
    const handleDeepLink = ({ url }) => {
      const route = url.replace(/.*?:\/\//g, "");
      navigate("SharePost", { link: route });
    };

    // Listen to deep links
    Linking.addEventListener("url", handleDeepLink);

    // Clean up event listener
    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer independent={true}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
