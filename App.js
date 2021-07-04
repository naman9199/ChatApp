import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LoginScreen from "./src/screens/Login";
import Navigation from "./Navigation";
import * as Application from "expo-application";

// var firebaseConfig = {
//   apiKey: "AIzaSyCj4cvAzFrcNaVPkGneLF6f49ZFGy5EZ-4",
//   authDomain: "chatappnew-36ad3.firebaseapp.com",
//   projectId: "chatappnew-36ad3",
//   storageBucket: "chatappnew-36ad3.appspot.com",
//   messagingSenderId: "504507929464",
//   appId: "1:504507929464:web:74ea9760afdf6f6be4ae8d",
//   measurementId: "G-229VTZYHYG"
// };
// firebase.initializeApp(firebaseConfig);

export default function App() {
  console.log(Application.applicationId);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Navigation />
    </View>
  );
}
