import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const StoryScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{ fontSize: 22, fontWeight: "bold", color: Colors.PrimaryColor }}
      >
        Stories Coming Soon !
      </Text>
    </View>
  );
};

export default StoryScreen;
