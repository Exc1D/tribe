import { forumData } from "./data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

// Event Delegation
document.addEventListener("click", (e) => {
  const target = e.target.closest(
    "[data-like], [data-bookmark], [data-reply], #post-btn"
  );

  if (!target) return;

  if (target.dataset.like) {
    handleLikeClick(target.dataset.like);
  } else if (target.dataset.bookmark) {
    console.log("click");
    handleBookmarkClick(target.dataset.bookmark);
  } else if (target.dataset.reply) {
    handleReplyToggle(target.dataset.reply);
  } else if (target.id === "post-btn") {
    handlePostBtnClick();
  }
});

function handleLikeClick(postId) {
  const targetPost = forumData.find((post) => post.uuid === postId);
  if (!targetPost) return;

  if (targetPost.isLiked) {
    targetPost.likes--;
  } else {
    targetPost.likes++;
  }
  targetPost.isLiked = !targetPost.isLiked;
  render();
}

function handleBookmarkClick(postId) {
  const targetPost = forumData.find((post) => post.uuid === postId);
  if (!targetPost) return;

  if (targetPost.isBookmarked) {
    targetPost.bookmarks--;
  } else {
    targetPost.bookmarks++;
  }

  targetPost.isBookmarked = !targetPost.isBookmarked;
  render();
}

function handleReplyToggle(postId) {
  document.getElementById(`replies-${postId}`).classList.toggle("hidden");
}

function handlePostBtnClick() {
  const postInput = document.getElementById("post-input");
  const category = document.getElementById("category-select");
  let newPost = {
    username: "You",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
    category: `${category.value}`,
    timeAgo: "Just now",
    content: `${postInput.value}`,
    likes: 0,
    bookmarks: 0,
    replies: [],
    isLiked: false,
    isBookmarked: false,
    uuid: uuidv4(),
  };

  if (postInput.value === "") {
    alert("Come, share your thoughts with the tribe!");
  }

  forumData.unshift(newPost);
  postInput.value = "";
  render();
}

function getFeedHtml() {
  let feedHTML = "";

  forumData.forEach((post) => {
    let repliesHTML = "";
    if (post.replies.length > 0) {
      repliesHTML = `<div class="replies-section hidden" id="replies-${post.uuid}">`;
      post.replies.forEach((reply) => {
        repliesHTML += `
      <div class="reply">
        <div class="reply-header">
          <img class="reply-avatar" src="${reply.avatar}" alt="Avatar of ${reply.username}">
          <span class="reply-author">${reply.username}</span>
        </div>
        <div class="reply-content">
          ${reply.content}
        </div>
      </div>
    `;
      });
      repliesHTML += `</div>`;
    }
    feedHTML += `
      <div class="post">
        <div class="post-header">
          <img class="avatar" src="${post.avatar}" alt="Avatar of ${
      post.username
    }">
          <div class="post-author">
            <p class="author-name">${post.username}</p>
            <p class="post-time">${post.timeAgo}</p>
          </div>
          <span class="category-badge">${post.category}</span>
        </div>
        <div class="post-content">
          ${post.content}
        </div>
        <div class="post-actions-bar">
          <button class="action-btn" data-reply="${post.uuid}">
            <i class="fa-regular fa-comment-dots"></i>
            <span>${post.replies.length}</span>
          </button>
          <button class="action-btn ${
            post.isLiked ? "liked" : ""
          }" data-like="${post.uuid}">
            <i class="fa-solid fa-heart"></i>
            <span>${post.likes}</span>
          </button>
          <button class="action-btn ${
            post.isBookmarked ? "bookmarked" : ""
          }" data-bookmark="${post.uuid}">
            <i class="fa-solid fa-bookmark"></i>
            <span>${post.bookmarks}</span>
          </button>
        </div>
        ${repliesHTML}
      </div>
    `;
  });
  return feedHTML;
}

function render() {
  const feed = document.getElementById("feed");
  feed.innerHTML = getFeedHtml();
}

render();
