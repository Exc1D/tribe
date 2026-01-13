export const forumData = [
  {
    username: "Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    category: "tech",
    timeAgo: "2h ago",
    content:
      "Just deployed my first Next.js app! The learning curve was steep but totally worth it. Any tips for optimizing performance?",
    likes: 24,
    bookmarks: 8,
    replies: [
      {
        username: "Mike Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
        content:
          "Congrats! Make sure to use dynamic imports and implement image optimization!",
      },
      {
        username: "Emma Davis",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
        content:
          "Check out Next.js Image component and use ISR for better performance 🚀",
      },
    ],
    isLiked: false,
    isBookmarked: false,
    uuid: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  },
  {
    username: "Alex Morgan",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    category: "design",
    timeAgo: "5h ago",
    content:
      "Does anyone else struggle with choosing the perfect color palette? I spend hours on it and still feel unsure 😅",
    likes: 42,
    bookmarks: 15,
    replies: [
      {
        username: "Jessica Lee",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
        content:
          "Try Coolors or Adobe Color! They help a lot with finding complementary colors.",
      },
    ],
    isLiked: false,
    isBookmarked: false,
    uuid: "b2c3d4e5-f6g7-8901-bcde-f12345678901",
  },
  {
    username: "David Park",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    category: "business",
    timeAgo: "1d ago",
    content:
      "Interesting stat: 90% of startups fail, but the ones that succeed often pivot multiple times. Persistence > perfection.",
    likes: 89,
    bookmarks: 34,
    replies: [],
    isLiked: false,
    isBookmarked: false,
    uuid: "c3d4e5f6-g7h8-9012-cdef-123456789012",
  },
];
