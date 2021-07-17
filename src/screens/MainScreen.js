import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { bgDarkBlue } from "../theme/index";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.contentColor}>Hi I am Main Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgDarkBlue,
    alignItems: "center",
    justifyContent: "center"
  },
  contentColor: {
    color: "white"
  }
});
export default MainScreen;
