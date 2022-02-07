/** @format */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import useAuth from "../hooks/useAuth";
import { memoedValue } from "../hooks/useAuth";
const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth(memoedValue);

  return (
    <>
      {!loading && (
        <View style={styles.container}>
          <StatusBar barStyle="white" backgroundColor="#4A154B" />
          <View style={styles.loginDiv}>
            <Image
              style={styles.headerLogo}
              source={{
                uri: "https://www.itprotoday.com/sites/itprotoday.com/files/appIcon_desktop.png",
              }}
            />
            <TouchableOpacity onPress={signInWithGoogle}>
              <Text
                style={tw`text-lg font-bold bg-white rounded-md py-1 px-4 text-[#4A154B]`}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A154B",
  },
  loginDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLogo: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: 20,
  },
});
