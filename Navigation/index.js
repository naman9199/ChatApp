import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../src/screens/Login";
import AuthLoader from "./AuthLoading";

let initial = 1;

function initialRoute() {
  if (initial) {
    return "Login";
  } else {
    return "Root";
  }
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AuthLoad"
    >
      <Stack.Screen name="AuthLoad" component={AuthLoader} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
