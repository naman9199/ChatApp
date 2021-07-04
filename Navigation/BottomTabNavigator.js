import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../constants/Colors";
import ChatScreen from "../src/screens/Chat";
import StoryScreen from "../src/screens/Story";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const BottomTab = createMaterialTopTabNavigator();
// const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: Colors.PrimaryColor,
        },
        labelStyle: {
          fontSize: 15,
          // paddingBottom: 10,
          paddingTop: 22,
        },
      }}
    >
      <BottomTab.Screen
        name="Chat"
        component={TabTwoNavigator}
        options={{ headerTitle: "Tab Two Title" }}
      />
      <BottomTab.Screen
        name="Story"
        component={TabOneNavigator}
        options={{ headerTitle: "Tab One Title" }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator();
const TabTwoStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
      <TabOneStack.Screen name="TabOneScreen" component={StoryScreen} />
    </TabOneStack.Navigator>
  );
}
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{ headerShown: false }}>
      <TabTwoStack.Screen name="TabTwoScreen" component={ChatScreen} />
    </TabTwoStack.Navigator>
  );
}
