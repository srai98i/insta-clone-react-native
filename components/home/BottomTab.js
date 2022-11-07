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
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={{ width: 35, height: 35 }}
            source={{ uri: bottomTabIcons[0].active }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 35, height: 35 }}
            source={{ uri: bottomTabIcons[1].inactive }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 35, height: 35 }}
            source={{ uri: bottomTabIcons[2].inactive }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 35, height: 35 }}
            source={{ uri: bottomTabIcons[3].inactive }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 35, height: 35 }}
            source={{ uri: bottomTabIcons[4].inactive }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: "#fff",
  },
  iconsContainer: {
    // borderWidth: 1,
    // borderColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
