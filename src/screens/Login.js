import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/Colors";

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("NAME", value);
  } catch (e) {
    console.log(e);
  }
};

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Image source={require("../../assets/chat.jpg")} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(val) => setName(val)}
      />
      <View style={styles.continue}>
        <TouchableOpacity
          style={{
            padding: 22,
            borderRadius: 44,
          }}
          onPress={() => {
            navigation.navigate("Root");
            storeData(name);
          }}
        >
          <AntDesign name="arrowright" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  circle: {
    width: 550,
    height: 550,
    borderColor: Colors.PrimaryColor,
    borderWidth: 30,
    backgroundColor: "#fff",
    borderRadius: 275,
    left: -150,
    top: -60,
    position: "absolute",
  },
  image: {
    width: 350,
    height: 350,
    top: 50,
    left: -40,
    borderRadius: 100,
  },
  continue: {
    width: 80,
    height: 80,
    borderRadius: 40,
    bottom: 30,
    right: 30,
    position: "absolute",
    backgroundColor: Colors.PrimaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: Colors.PrimaryColor,
    height: 50,
    width: 300,
    borderWidth: 10,
    position: "absolute",
    bottom: 170,
    paddingLeft: 30,
    backgroundColor: "white",
    borderRadius: 25,
    color: Colors.SecondaryColor,
    fontWeight: "bold",
    fontSize: 18,
  },
});
