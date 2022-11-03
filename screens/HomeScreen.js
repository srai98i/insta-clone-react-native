import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import React from "react";
import { posts } from "../libs/post";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />

        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
