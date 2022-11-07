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
      <View style={styles.allIconsContainer}>
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
      <Text style={styles.likes}>{post.likes.toLocaleString("en")} likes</Text>
      <View style={styles.caption}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "bold" }}>{post.user} </Text>
          <Text style={{ marginLeft: 1 }}>{post.caption}</Text>
        </Text>
      </View>
      <View style={styles.comments}>
        {post.comments.length > 0 ? (
          <View>
            <Text style={{ color: "gray" }}>
              {post.comments.length > 1
                ? `View all ${post.comments.length} comments`
                : `View ${post.comments.length} comment`}
            </Text>

            {post.comments.map((comments, index) => (
              <View key={index} style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    marginTop: 3,
                    flexDirection: "row",
                    fontWeight: "bold",
                  }}
                >
                  {comments.user}{" "}
                </Text>
                <Text
                  style={{
                    color: "white",
                    marginTop: 3,
                    flexDirection: "row",
                  }}
                >
                  {comments.comment}
                </Text>
              </View>
            ))}
          </View>
        ) : null}
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  allIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "white",

    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
  },
  footerIcon: {
    width: 33,
    height: 33,
    marginLeft: 7,
    marginRight: 5,
  },
  likes: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 7,
  },
  caption: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 6,
    flexDirection: "row",
  },
  comments: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 6,
    flexDirection: "row",
  },
});
