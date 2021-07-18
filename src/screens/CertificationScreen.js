import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { bgDarkBlue } from "../theme/index";

const CertificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.contentColor}>Hi I am CertificationScreen</Text>
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
export default CertificationScreen;
