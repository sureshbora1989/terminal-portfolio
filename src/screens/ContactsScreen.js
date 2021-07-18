import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { bgDarkBlue, green, midBlue } from "../theme/index";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.headingMain}>Contact Me</Text>
        <View style={styles.spaceBetween} />
        <Text style={styles.headLineSecond}>Feel free to contact me</Text>
      </View>
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
  contentContainer: {
    width: "100%",
    height: "100%",
    padding: 10
  },
  headingMain: {
    color: green,
    fontSize: 25
  },
  spaceBetween: {
    paddingTop: 20
  },
  headLineSecond: {
    color: midBlue,
    fontSize: 20
  }
});

export default ContactScreen;
