/** @format */
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Channel = () => {
  return (
    <TouchableOpacity style={{ marginBottom: 6 }}>
      <View style={styles.container}>
        <Text style={tw`font-bold text-gray-600 text-lg mr-6`}>#</Text>
        <Text style={tw`text-lg text-gray-800`}>Jos channel</Text>
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
