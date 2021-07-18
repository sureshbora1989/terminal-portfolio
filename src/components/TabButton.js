import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { ScreenContext } from "../AppContainer";

const TabButton = (props) => {
  const currentScreen = useContext(ScreenContext);

  return (
    <View style={styles.tabButton}>
      <TouchableHighlight
        onPress={() => {
          props.changeScreen(props.screenIndex);
        }}
      >
        <Text style={styles.buttonText}>{props.buttonName}</Text>
      </TouchableHighlight>
      <View
        style={
          currentScreen == props.screenIndex
            ? styles.selectedButton
            : styles.notSelectedButton
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    padding: 10
  },
  buttonText: {
    color: "white"
  },
  selectedButton: {
    height: 1,
    width: "100%",
    backgroundColor: "#FFFFFF"
  },
  notSelectedButton: {
    height: 0,
    width: "100%",
    backgroundColor: "#FFFFFF"
  }
});

export default TabButton;
