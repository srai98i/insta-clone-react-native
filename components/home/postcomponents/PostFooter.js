import React from "react";
import {
  View,
  Text,
  SaveAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import postFooterIcons from "../../../libs/postFooterIcons";

export default function PostFooter({ post }) {
  function Icon({ imgStyle, imgUrl }) {
    return (
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={{ uri: imgUrl }} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[0].imageUrl}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[1].imageUrl}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[2].imageUrl}
        />
      </View>

      <View style={styles.iconContainer}>
        <Icon
          imgStyle={styles.footerIcon}
          imgUrl={postFooterIcons[3].imageUrl}
        />
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
  },
  footerIcon: {
    width: 33,
    height: 33,
    marginLeft: 10,
  },
});
