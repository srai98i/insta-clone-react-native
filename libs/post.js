import users from "./users.js";

export const posts = [
  {
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    user: users[0].user,
    likes: 100,
    caption: "This is a caption",
    profilePicture: "https://img.icons8.com/ios/60/ffffff/person-female.png",
    postedAt: "6 minutes ago",
    comments: [
      {
        user: users[1].user,
        comment: "This is a comment",
      },
      {
        user: users[2].user,
        comment: "This is another comment",
      },
    ],
  },
  {
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    user: users[3].user,
    likes: 100,
    caption: "This is a caption",
    profilePicture: "https://img.icons8.com/ios/60/ffffff/user.png",
    postedAt: "6 minutes ago",
    comments: [
      {
        user: users[0].user,
        comment: "This is a comment",
      },
      {
        user: users[2].user,
        comment: "This is another comment",
      },
    ],
  },
  {
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    user: users[0].user,
    likes: 100,
    caption: "This is a caption",
    profilePicture: "https://img.icons8.com/ios/60/ffffff/user.png",
    postedAt: "6 minutes ago",
    comments: [
      {
        user: users[1].user,
        comment: "This is a comment",
      },
      {
        user: users[2].user,
        comment: "This is another comment",
      },
    ],
  },
];
