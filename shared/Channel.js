/** @format */
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Channel = ({ channelName, id, enterChat, route }) => {
  return (
    <TouchableOpacity
      style={{ marginBottom: 6 }}
      onPress={() => enterChat(id, channelName)}
    >
      <View style={styles.container}>
        <Text style={tw`font-bold text-gray-600 text-lg mr-4`}>#</Text>
        <Text style={tw`text-lg text-gray-800`}>{channelName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Channel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
});
