import { forumData } from "./data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

// TODO: Get DOM elements

// TODO: Add event listener for clicks (like, bookmark, reply toggle, post button)

// TODO: Function to handle like click
function handleLikeClick(postId) {
  // Find the post by uuid
  // Toggle isLiked
  // Increment or decrement likes
  // Re-render
}

// TODO: Function to handle bookmark click
function handleBookmarkClick(postId) {
  // Find the post by uuid
  // Toggle isBookmarked
  // Increment or decrement bookmarks
  // Re-render
}

// TODO: Function to handle reply toggle
function handleReplyToggle(postId) {
  // Toggle the hidden class on replies section
}

// TODO: Function to handle post button click
function handlePostBtnClick() {
  // Get post input value and category
  // Create new post object with:
  // - username: 'You'
  // - avatar: user's avatar
  // - current category
  // - timeAgo: 'Just now'
  // - content from textarea
  // - likes: 0, bookmarks: 0
  // - empty replies array
  // - isLiked: false, isBookmarked: false
  // - new uuid
  // Add to beginning of forumData array
  // Clear textarea
  // Re-render
}

// TODO: Function to generate category emoji and label
function getCategoryDisplay(category) {
  const categories = {
    general: "💬 General",
    tech: "💻 Tech",
    design: "🎨 Design",
    business: "💼 Business",
    lifestyle: "🌟 Lifestyle",
  };
  return categories[category] || "💬 General";
}

// TODO: Function to generate feed HTML
function getFeedHtml() {
  // Loop through forumData
  // For each post, create HTML with:
  // - Post header (avatar, username, time, category badge)
  // - Post content
  // - Action buttons (reply, like, bookmark)
  // - Replies section (hidden by default)
  // Return complete HTML string
}

// TODO: Function to render the feed
function render() {
  // Get feed element
  // Set innerHTML to getFeedHtml()
}

// TODO: Call render to initialize

/*
        CHALLENGES - Using the SAME PATTERNS from Twimba:
        
        1. Set up event delegation (one click listener on document)
           - Handle like clicks
           - Handle bookmark clicks  
           - Handle reply toggle clicks
           - Handle post button clicks
        
        2. Implement handleLikeClick(postId)
           - Use .filter() to find the post by uuid
           - Toggle isLiked property
           - Increment/decrement likes count
           - Call render()
        
        3. Implement handleBookmarkClick(postId)
           - Same pattern as like, but for bookmarks
        
        4. Implement handleReplyToggle(postId)
           - Use classList.toggle() to show/hide replies
        
        5. Implement handlePostBtnClick()
           - Get textarea value
           - Create new post object
           - Use .unshift() to add to beginning of array
           - Clear textarea
           - Call render()
        
        6. Implement getFeedHtml()
           - Loop through forumData with .forEach()
           - Build HTML string for each post
           - Include replies HTML if replies exist
           - Add data attributes for event delegation
           - Apply conditional classes (liked, bookmarked)
        
        7. Implement render()
           - Update feed innerHTML
        
        BONUS CHALLENGES:
        - Add a character counter for the textarea
        - Add validation (can't post empty content)
        - Add a "delete post" feature
        - Persist data to localStorage
        - Add post editing functionality
        */
