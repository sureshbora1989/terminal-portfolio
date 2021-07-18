import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { bgDarkBlue } from "../theme/index";

const SkillsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.contentColor}>Hi I am Skills Screen</Text>
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
export default SkillsScreen;
