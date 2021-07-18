import React from "react";
import { View, StyleSheet } from "react-native";
import { bgDarkBlue } from "../theme/index";
import TabButton from "./TabButton";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TabButton
        buttonName="home.html"
        screenIndex="0"
        changeScreen={props.changeScreen}
      />
      <TabButton
        buttonName="skills.js"
        screenIndex="1"
        changeScreen={props.changeScreen}
      />
      <TabButton
        buttonName="education.css"
        screenIndex="2"
        changeScreen={props.changeScreen}
      />
      <TabButton
        buttonName="projects.config"
        screenIndex="3"
        changeScreen={props.changeScreen}
      />
      <TabButton
        buttonName="certificaiton.json"
        screenIndex="4"
        changeScreen={props.changeScreen}
      />
      <TabButton
        buttonName="contacts.md"
        screenIndex="5"
        changeScreen={props.changeScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: bgDarkBlue
  }
});

export default Header;
