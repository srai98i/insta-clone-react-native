import React from "react";
import {
  View,
  Text,
  SaveAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function PostImage({ post }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: post.imageUrl,
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 450,
    // borderWidth: "1px",
    // borderColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
