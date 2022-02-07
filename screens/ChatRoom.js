/** @format */
import { StyleSheet, Text, View, TextInput, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import tw from "twrnc";
import useAuth from "../hooks/useAuth";
import { memoedValue } from "../hooks/useAuth";
import { AntDesign } from "@expo/vector-icons";

const ChatRoom = ({ navigation, route }) => {
  const Channel = route.params;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { user } = useAuth(memoedValue);
  const collRef = collection(db, `channels/${Channel.id}/messages`);
  const Queried = query(collRef, orderBy("timestamp", "asc"));

  return (
    <View>
      <StatusBar barStyle="black" backgroundColor="white" />
      {/* chat room header */}
      <View style={styles.headerContainer}>
        <View style={tw`flex items-center space-x-2`}>
          <AntDesign name="left" size={24} style={tw`mr-2`} />
          <Text>
            # {""}
            {Channel.channelName}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
