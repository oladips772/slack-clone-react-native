/** @format */
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";
import Feed from "../components/Feed";

const HomeScreen = () => {
  return (
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
        <Text style={tw`font-bold text-white text-lg text-center items-center`}>
          Slack Community
        </Text>
        <Image
          style={styles.userLogo}
          source={{
            uri: "https://media-exp1.licdn.com/dms/image/C4E03AQFOfPu93n6Kxw/profile-displayphoto-shrink_100_100/0/1632301101571?e=1649894400&v=beta&t=UDufBl9k4T3xAMVArarvPeQtuuuhgflKTlm9SfDuoQE",
          }}
        />
          </View>
          <Feed />
    </View>
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
