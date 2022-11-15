import React, { useState } from "react";
import {
  View,
  Text,
  SaveAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import bottomTabIcons from "../../libs/bottomTabIcons";

export default function BottomTab({ icons }) {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(bottomTabIcons[0].name);
          }}
          style={styles.individualIcon}
        >
          <Image
            style={{ width: 29, height: 29 }}
            source={{
              uri:
                activeTab === bottomTabIcons[0].name
                  ? bottomTabIcons[0].active
                  : bottomTabIcons[0].inactive,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(bottomTabIcons[1].name);
          }}
          style={styles.individualIcon}
        >
          <Image
            style={{ width: 29, height: 29 }}
            source={{
              uri:
                activeTab === bottomTabIcons[1].name
                  ? bottomTabIcons[1].active
                  : bottomTabIcons[1].inactive,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(bottomTabIcons[2].name);
          }}
          style={styles.individualIcon}
        >
          <Image
            style={{ width: 29, height: 29 }}
            source={{
              uri:
                activeTab === bottomTabIcons[2].name
                  ? bottomTabIcons[2].active
                  : bottomTabIcons[2].inactive,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(bottomTabIcons[3].name);
          }}
          style={styles.individualIcon}
        >
          <Image
            style={{ width: 29, height: 29 }}
            source={{
              uri:
                activeTab === bottomTabIcons[3].name
                  ? bottomTabIcons[3].active
                  : bottomTabIcons[3].inactive,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(bottomTabIcons[4].name);
          }}
          style={styles.individualIcon}
        >
          <Image
            style={{ width: 29, height: 29 }}
            source={{
              uri:
                activeTab === bottomTabIcons[4].name
                  ? bottomTabIcons[4].active
                  : bottomTabIcons[4].inactive,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
    borderWidth: 1,
    // borderColor: "red",
    height: 50,
    display: "flex",
    justifyContent: "center",
    zIndex: 999,
  },
  iconsContainer: {
    // borderWidth: 1,
    // borderColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  individualIcon: {
    borderWidth: 1,
    // borderColor: "green",
    width: 65,
    display: "flex",
    alignItems: "center",
  },
});
