import "./List.css";
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { BlogTile } from "../BlogTile/BlogTile";
import { ProjectTile } from "../ProjectTile/ProjectTile";
import { monthToNumber } from "../../utility/monthToNumber";
import { ListFilter } from "../ListFilter/ListFilter";

// TYPES: 1 = PROJECT, 2 = JUST FOR FUN, 3 = BLOG
export function List({ header, items, type }) {
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const location = useLocation();

  // Restore scroll position when component mounts (after navigating back)
  useEffect(() => {
    const savedScrollPos = sessionStorage.getItem("listScrollPos");
    if (savedScrollPos) {
      // Use requestAnimationFrame for smoother scroll restoration
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedScrollPos));
        sessionStorage.removeItem("listScrollPos"); // Clean up the stored position
      });
    }
  }, [location.pathname]); // Re-run when pathname changes (e.g., navigating back to this page)

  const saveScrollPosition = () => {
    sessionStorage.setItem("listScrollPos", window.scrollY);
  };

  // Automatically reset search when input is cleared
  useEffect(() => {
    if (searchInput === "") {
      setSearchQuery(""); // Reset search filter when input is empty
    }
  }, [searchInput]);

  // get array out of JSON Object structure
  const itemsArray = Object.values(items);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    itemsArray.forEach((item) => {
      // if Blog
      if (type === 3) {
        if (item.tags && Array.isArray(item.tags)) {
          item.tags.forEach((tag) => tags.add(tag.title));
        }
      }
      // else (type is Project or Just For Fun)
      else {
        tags.add(item.type);
      }
    });
    return Array.from(tags).sort();
  }, [itemsArray, type]);

  // Sort items based on featured status then selected order
  const sortedItems = useMemo(() => {
    const sortableItems = [...itemsArray];
    return sortableItems.sort((a, b) => {
      // 1. Sort by isFeatured (true first, so featured items come before non-featured)
      // If a is featured (true), a.isFeatured - b.isFeatured will be 1 - 0 = 1 (a comes after b) or 1 - 1 = 0
      // We want true to come before false, so (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
      const featuredComparison =
        (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      if (featuredComparison !== 0) {
        return featuredComparison;
      }

      let dateA = "";
      let dateB = "";
      if (type === 3) {
        dateA = new Date(a.publishedAt);
        dateB = new Date(b.publishedAt);
      } else {
        // 2. If featured status is the same, then sort by date
        dateA = new Date(
          a.date.split(" ")[1],
          monthToNumber(a.date.split(" ")[0])
        );
        dateB = new Date(
          b.date.split(" ")[1],
          monthToNumber(b.date.split(" ")[0])
        );
      }

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [itemsArray, sortOrder, type]);

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

  // Function to handle tag click
  const handleTagClick = (tag) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag)); // Deselect if same tag clicked, otherwise select new tag
  };

  const filteredItems = useMemo(() => {
    return sortedItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.date.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesTag = null;
      // if Blog post
      if (type === 3) {
        //let itemTags = item.tags.map((tag) => tag.title);
        matchesTag = selectedTag
          ? item.tags &&
            item.tags.some((postTagRef) => postTagRef.title === selectedTag)
          : true; // If no tag selected, all items match
      }
      // else (type is Project or Just For Fun)
      else {
        matchesTag = selectedTag ? item.type === selectedTag : true; // If no tag selected, all items match
      }

      return matchesSearch && matchesTag;
    });
  }, [sortedItems, searchQuery, selectedTag, type]);

  return (
    <div style={{ width: "100%" }}>
      <div className="listHeader">
        <p className="listHeaderTitle">{header}</p>
        <div className="listSearchAndSort">
          <div>
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
          </div>

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
        {/* Tags Filter */}
        <ListFilter
          filters={allTags}
          activeFilter={selectedTag}
          onFilterChange={handleTagClick}
        />
      </div>
      <div className="listItems">
        {filteredItems.map((item, index) => {
          if (type === 1) {
            return (
              <ProjectTile
                project={item}
                type={"project"}
                key={index}
                onClick={saveScrollPosition}
              />
            );
          } else if (type === 2) {
            return (
              <ProjectTile
                project={item}
                type={"justForFun"}
                key={index}
                onClick={saveScrollPosition}
              />
            );
          } else {
            return (
              <BlogTile post={item} key={index} onClick={saveScrollPosition} />
            );
          }
        })}
      </div>
    </div>
  );
}
