import React from "react";
import {
  View,
  Text,
  SaveAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import PostHeader from "./postcomponents/PostHeader";
import { posts } from "../../libs/post";
import PostImage from "./postcomponents/PostImage";
import PostFooter from "./postcomponents/PostFooter";

export default function Post({ post }) {
  return (
    <View style={styles.container}>
      <PostHeader post={post} />

      <PostImage post={post} />

      <PostFooter post={post} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
