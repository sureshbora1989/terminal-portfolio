import React from "react";
import { useState } from "react";

import { View, StyleSheet } from "react-native";
import {
  HomeScreen,
  SkillScreen,
  EducationScreen,
  ProjectScreen,
  CertificationScreen,
  ContactsScreen
} from "./screens/index";

import { Header } from "./components/index";

export const ScreenContext = React.createContext(0);

const AppContainer = () => {
  const screenStack = [
    <HomeScreen />,
    <SkillScreen />,
    <EducationScreen />,
    <ProjectScreen />,
    <CertificationScreen />,
    <ContactsScreen />
  ];

  const [currentScreen, setCurrentScreen] = useState(0);

  const CurrentScreen = () => {
    return screenStack[currentScreen];
  };

  const changeScreen = (index) => {
    setCurrentScreen(index);
  };
  return (
    <View style={styles.appContainer}>
      <ScreenContext.Provider value={currentScreen}>
        <Header changeScreen={changeScreen} />
        <View style={styles.screenContaienr}>
          <CurrentScreen />
        </View>
      </ScreenContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  screenContaienr: {
    flex: 1
  },
  screens: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default AppContainer;
