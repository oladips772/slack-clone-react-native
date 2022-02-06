/** @format */
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text
        style={tw`border border-gray-400 p-2 rounded-lg text-lg text-gray-500 mx-2`}
      >
        Jump to...
      </Text>
      <View>
        <AntDesign name="message1" size={26} style={tw`text-gray-600`} />
        <Text>Threads</Text>
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 4,
  },
});
