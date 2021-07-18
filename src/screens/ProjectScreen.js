import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { bgDarkBlue, green, midBlue, textMid } from "../theme/index";

const data = [
  {
    type: "Some of the project I have worked on so far",
    skillsList: [
      "Android Development",
      "React Native Development",
      "Ionic Development",
      "Flutter Development",
      "Unity 3D Development"
    ]
  }
];
const ProjectScreen = () => {
  const listInsideItem = ({ item }) => {
    return (
      <View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.bulletColor}>{"\u2022"}</Text>
            <Text style={styles.bulletPoint}>{item}</Text>
          </View>
        </View>
      </View>
    );
  };
  const renderListItem = ({ item }) => {
    return (
      <View>
        <View style={styles.spaceBetween} />
        <Text style={styles.headLineSecond}>{item.type}</Text>
        <View style={styles.spaceBetweenSoft} />
        <FlatList data={item.skillsList} renderItem={listInsideItem} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.headingMain}>Projects</Text>
        <FlatList
          style={styles.dataList}
          data={data}
          renderItem={renderListItem}
        />
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
    padding: 15
  },
  headingMain: {
    color: green,
    fontSize: 30
  },
  dataList: {
    paddingLeft: 10
  },
  spaceBetween: {
    paddingTop: 20
  },
  spaceBetweenSoft: {
    paddingTop: 10
  },
  headLineSecond: {
    color: midBlue,
    fontSize: 25
  },
  bulletColor: {
    color: textMid
  },
  bulletPoint: {
    color: textMid,
    flex: 1,
    padding: 3,
    fontSize: 16
  }
});

export default ProjectScreen;
