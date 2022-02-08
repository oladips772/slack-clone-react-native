/** @format */
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const Message = ({ userName, userImage, message, id, timeStamp }) => {
  return (
    <View
      style={{ padding: 4, flexDirection: "row", backgroundColor: "green" }}
      ley={id}
    >
      {/* <Image source={{ uri: userImage }} style={tw`h-12 w-12 rounded-full`} /> */}
      <View>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Text style={tw`font-bold`}>{userName}</Text>
          <Text style={tw`text-sm text-gray-300 ml-2 font-bold`}>
            {timeStamp}
          </Text>
        </View>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
