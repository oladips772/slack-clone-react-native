/** @format */
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ToastAndroid,
  LogBox,
} from "react-native";
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
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import Message from "../shared/Message";
LogBox.ignoreAllLogs();
 
const ChatRoom = ({ navigation, route }) => {
  const Channel = route.params;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { user } = useAuth(memoedValue);
  const collRef = collection(db, `channels/${Channel.id}/messages`);
  const Queried = query(collRef, orderBy("timestamp", "asc"));

  const sendMessage = () => {
    if (input.trim()) {
      if (messages) {
        Keyboard.dismiss();
        addDoc(collRef, {
          message: input,
          userName: user.displayName,
          userImage: user.photoURL,
          timeStamp: serverTimestamp(),
        });
      }
      setInput("");
    } else {
      ToastAndroid.showWithGravityAndOffset(
        "your message won't be sent if empty!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  };

  useEffect(
    () =>
      onSnapshot(Queried, (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      }),
    [messages]
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <StatusBar barStyle="dark" backgroundColor="white" /> */}
      {/* chat room header */}
      <View style={styles.headerContainer}>
        <View style={tw`flex items-center space-x-2 flex-row`}>
          <AntDesign
            name="left"
            size={24}
            style={tw`mr-2 p-1`}
            onPress={() => navigation.goBack()}
          />
          <Text style={tw`text-lg`}>
            # {""}
            {Channel.channelName}
          </Text>
        </View>
        <MaterialIcons name="error-outline" size={22} style={tw`p-2`} />
      </View>
      {/* input div */}
      <KeyboardAvoidingView
        keyboardVerticalOffset={-390}
        behavior={"height"}
        style={styles.keyboard}
      >
        <ScrollView
          vertical={true}
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 220,
            marginTop: 20,
            height: "100%",
            backgroundColor: "blue",
          }}
        >
          <View>
            {messages && messages.map(
              ({ id, data: { userName, userImage, message, timeStamp } }) => (
                // <Message
                //   key={id}
                //   id={id}
                //   userName={userName}
                //   userImage={userImage}
                //   message={message}
                //   timeStamp={timeStamp}
                // />
                <Text key={id} style={tw`font-bold text-2xl text-white`}>
                  {message}
                </Text>
              )
            )}
          </View>
        </ScrollView>
        <View style={styles.inputContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.textInput}
              value={input}
              onChangeText={(val) => setInput(val)}
              placeholder={`#${Channel.channelName}`}
            />
            <TouchableOpacity onPress={sendMessage}>
              <Ionicons
                name="send"
                size={27}
                color="#4A154B"
                style={{ padding: 6, marginRight: 2 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 4,
    paddingTop: 4,
  },
  inputContainer: {
    position: "absolute",
    bottom: 50,
    zIndex: 999,
    padding: 4,
    paddingBottom: 8,
    width: "100%",
    backgroundColor: "white",
  },
  textInput: {
    fontSize: 18,
    width: "80%",
    marginLeft: 4,
  },
  keyboard: {
    height: "100%",
    position: "relative",
  },
});
