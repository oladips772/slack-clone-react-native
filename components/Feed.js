/** @format */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import Channel from "../shared/Channel";
import { auth, db } from "../firebase";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { Octicons, Ionicons } from "@expo/vector-icons";

const Feed = ({ navigation }) => {
  const [Channels, setChannels] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [channelRoom, setChannelRoom] = useState("");
  const collRef = collection(db, "channels");

  const createChannel = () => {
    if (channelRoom.trim()) {
      addDoc(collRef, {
        channelName: channelRoom,
      });
      setChannelRoom("");
      setModalVisible(!modalVisible);
      ToastAndroid.showWithGravityAndOffset(
        "channel created succesfully !",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } else {
      ToastAndroid.showWithGravityAndOffset(
        "A valid channel name is required!!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  };

  const enterChat = (id, channelName) => {
    navigation.navigate("ChatRoom", {
      id: id,
      channelName: channelName,
    });
  };

  useEffect(
    () =>
      onSnapshot(collRef, (snaphot) => {
        setChannels(
          snaphot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      }),
    []
  );

  return (
    <View style={styles.container}>
      <Text
        style={tw`border border-gray-400 p-2 rounded-lg text-lg text-gray-500`}
      >
        Jump to...
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          borderBottomWidth: 1,
          paddingBottom: 10,
          borderBottomColor: "lightgray",
        }}
      >
        <AntDesign name="message1" size={22} style={tw`text-gray-600`} />
        <Text style={tw`text-gray-600 ml-4 text-lg`}>Threads</Text>
      </View>
      {/* channels componnets */}
      <View style={tw`mt-4`}>
        <Text style={tw`text-gray-600 text-sm font-bold mb-4`}>channels</Text>
        {Channels.map(({ id, data: { channelName } }) => (
          <Channel
            channelName={channelName}
            id={id}
            key={id}
            enterChat={enterChat}
          />
        ))}

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={tw`flex flex-row items-center space-x-4 mt-2 p-2`}
        >
          <AntDesign
            name="plus"
            size={20}
            style={tw`text-gray-600 font-bold`}
          />
          <Text style={tw`text-gray-600 font-bold ml-2`}>Add a channel</Text>
        </TouchableOpacity>
      </View>
      {/*? modal view */}
      <Modal visible={modalVisible} animationType="fade">
        {/* modal header view */}
        <View style={styles.modalHeader}>
          <Text style={tw`text-white text-lg font-bold`}>Create a channel</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Octicons name="pencil" size={22} style={tw`text-white`} />
            <Ionicons
              name="close"
              size={27}
              style={tw`text-white ml-6 p-1`}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
        {/* input view */}
        <View style={{ marginHorizontal: 12, marginTop: 25 }}>
          <TextInput
            placeholder="room name.."
            style={styles.input}
            value={channelRoom}
            onChangeText={(val) => setChannelRoom(val)}
          />
          <>
            <TouchableOpacity onPress={createChannel}>
              <Text
                style={tw`font-bold text-center p-1 text-lg text-white rounded bg-[#4A154B]`}
              >
                Create
              </Text>
            </TouchableOpacity>
          </>
        </View>
      </Modal>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    marginHorizontal: 10,
  },
  modalHeader: {
    paddingTop: 10,
    backgroundColor: "#4A154B",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 6,
    paddingLeft: 3,
  },
  input: {
    height: 30,
    width: "100%",
    marginBottom: 25,
    borderBottomColor: "#4A154B",
    borderBottomWidth: 1,
    fontSize: 19,
  },
});
