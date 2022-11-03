import {
  View,
  Text,
  SaveAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import users from "../../libs/users";
import { Divider } from "react-native-elements";

export default function Stories() {
  return (
    <View style={{ marginBottom: 5 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((story, index) => (
          <TouchableOpacity key={index}>
            <View style={{ alignItems: "center" }}>
              <Image source={{ uri: story.image }} style={styles.story} />
              <Text style={{ color: "#fff", left: 5 }}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + "..."
                  : story.user.toLowerCase()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Divider width={1} orientation="vertical" style={{ marginTop: 6 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderWidth: "3px",
    borderColor: "#fff",
    borderRadius: 50,
    marginLeft: 6,
  },
});
