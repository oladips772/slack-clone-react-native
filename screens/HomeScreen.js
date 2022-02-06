/** @format */
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Feed from "../components/Feed";
import useAuth from "../hooks/useAuth";
import { memoedValue } from "../hooks/useAuth";

const HomeScreen = () => {
  const { logoutGoogle, user, loading } = useAuth(memoedValue);

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="white" backgroundColor="#4A154B" />
        {/* header view */}
        <View style={styles.headerContainer}>
          <Image
            style={styles.headerLogo}
            source={{
              uri: "https://www.itprotoday.com/sites/itprotoday.com/files/appIcon_desktop.png",
            }}
          />
          <Text
            style={tw`font-bold text-white text-lg text-center items-center`}
          >
            Slack Community
          </Text>
          <TouchableOpacity onPress={logoutGoogle}>
            <Image
              style={styles.userLogo}
              source={{
                uri: user.photoURL,
              }}
            />
          </TouchableOpacity>
        </View>
        <Feed />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: "#4A154B",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 4,
    paddingBottom: 7,
    paddingHorizontal: 6,
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  userLogo: {
    width: 35,
    height: 35,
    borderRadius: 50,
    resizeMode: "contain",
  },
});
