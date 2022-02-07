/** @format */
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import Channel from "../shared/Channel";
import { auth, db } from "../firebase";
import { addDoc, collection, doc } from "firebase/firestore";
import { Octicons, Ionicons } from "@expo/vector-icons";
const Feed = () => {
  const [channels, setChannels] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
        <Channel />
        <Channel />
        <Channel />
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
      <Modal visible={modalVisible} animationType="slide">
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
              style={tw`text-white ml-6`}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
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
    justifyContent: "space-around",
    paddingBottom: 8,
  },
});
