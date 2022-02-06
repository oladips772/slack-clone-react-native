/** @format */
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import tw from "twrnc";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <View>
      <Text>login screen</Text>
      <Button title="login" onPress={signInWithGoogle} />
    </View>
  );
};
 
export default LoginScreen;

const styles = StyleSheet.create({});
