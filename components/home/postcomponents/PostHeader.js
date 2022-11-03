import React from "react";
import {
  View,
  Text,
  SaveAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function PostHeader({ post }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.header}>
          <Image
            source={{
              uri: post.profilePicture,
            }}
            style={styles.profilePicture}
          />
          <Text style={{ color: "white", marginLeft: 5 }}>{post.user}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: "30px",
              marginRight: 7,
              fontWeight: "bold",
              paddingBottom: 10,
            }}
          >
            ...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 1,
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderWidth: "1.5px",
    borderColor: "#fff",
    borderRadius: 50,
    marginLeft: 6,
  },
});
