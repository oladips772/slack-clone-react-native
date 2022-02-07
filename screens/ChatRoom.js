/** @format */
import { StyleSheet, Text, View, TextInput } from "react-native";
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

const ChatRoom = ({ navigation, route }) => {
  const Channel = route.params;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { user } = useAuth(memoedValue);
  const collRef = collection(db, `channels/${Channel.id}/messages`);
  const Queried = query(collRef, orderBy("timestamp", "asc"));

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({});
