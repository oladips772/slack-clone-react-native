/** @format */
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import Channelist from "./Channelist";

const Feed = () => {
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
        <Channelist />
        <TouchableOpacity style={tw`flex flex-row items-center space-x-4 mt-2 p-2`}>
          <AntDesign name="plus" size={20} style={tw`text-gray-600 font-bold`} />
          <Text style={tw`text-gray-600 font-bold ml-2`}>Add a channel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Feed;                                          

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    marginHorizontal: 10,
  },
});
