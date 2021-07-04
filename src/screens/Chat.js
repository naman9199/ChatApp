import React from "react";
import { View, Platform, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import Fire from "../../Fire";
import Colors from "../../constants/Colors";

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
    name: "",
  };

  get user() {
    return {
      _id: Fire.uid,
      name: this.state.name,
    };
  }

  async componentDidMount() {
    let tempName = await AsyncStorage.getItem("NAME");
    this.setState({ name: tempName });
    Fire.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );
  }

  componentWillUnmount() {
    Fire.off();
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        textStyle={{
          left: { color: "white", fontSize: 13 },
          right: { color: "white", fontSize: 13 },
        }}
        wrapperStyle={{
          right: { backgroundColor: Colors.PrimaryColor },
          left: { backgroundColor: Colors.SecondaryColor },
        }}
      />
    );
  }
  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
        placeholder="Type Something!"
        renderBubble={this.renderBubble}
      />
    );
    if (Platform.OS === "android") {
      return <View style={{ flex: 1, backgroundColor: "white" }}>{chat}</View>;
    }
    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
  }
}
