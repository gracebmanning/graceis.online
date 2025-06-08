import "./BlogListPage.css";
import { BasicLayout } from "./BasicLayout";
import { useState, useEffect, useMemo } from "react";
import { BlogPreview } from "../pages/Blog/BlogPosts";

export function BlogPage({ title, posts }) {
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Automatically reset search when input is cleared
  useEffect(() => {
    if (searchInput === "") {
      setSearchQuery(""); // Reset search filter when input is empty
    }
  }, [searchInput]);

  // get posts array out of JSON Object structure
  const postsArray = Object.values(posts);

  // Sort posts based on the selected order
  const sortedPosts = useMemo(() => {
    // Create a shallow copy of the array before sorting
    // This prevents direct mutation of the original postsArray, which can cause issues with React's re-rendering
    const sortablePosts = [...postsArray];
    return sortablePosts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [postsArray, sortOrder]);

  // Function to handle search
  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  // Function to handle key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filteredPosts = sortedPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.previewText.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const content = (
    <div style={{ width: "100%" }}>
      <div className="blogHeader">
        <p style={{ margin: "0px", fontStyle: "italic" }}>{title}</p>
        <div className="blogSearchAndSort">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search titles..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className=""
          />

          {/* Search Button */}
          <button onClick={handleSearch} className="">
            Search
          </button>
          {/* Sorting Dropdown */}
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            className=""
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>
      <div className="blogList">
        {filteredPosts.map((post, index) => {
          return <BlogPreview post={post} key={index} />;
        })}
      </div>
    </div>
  );

  return <BasicLayout title={"Blog"} content={content} />;
}
