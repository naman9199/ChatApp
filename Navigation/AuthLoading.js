import React, { Component } from "react";
import { StatusBar, View, ActivityIndicator, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AuthLoader extends Component {
  componentDidMount() {
    this.handleRouting();
  }

  handleRouting = async () => {
    const { navigation } = this.props;
    const storedName = await AsyncStorage.getItem("NAME");
    if (!storedName) {
      navigation.navigate("Login");
    } else {
      navigation.navigate("Root");
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      ></View>
    );
  }
}
