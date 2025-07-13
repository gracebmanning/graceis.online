import "./List.css";
import { BasicLayout } from "../../layouts/BasicLayout";
import { useState, useEffect, useMemo } from "react";
import { BlogTile } from "../BlogTile/BlogTile";
import { ProjectTile } from "../ProjectTile/ProjectTile";
import { monthToNumber } from "../../utility/monthToNumber";
import { ListFilter } from "../ListFilter/ListFilter";

const types = {
  1: "Projects",
  2: "Just for Fun",
  3: "Blog",
};

// TYPES: 1 = PROJECT, 2 = JUST FOR FUN, 3 = BLOG
export function List({ header, items, type }) {
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

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
      tags.add(item.type);
    });
    console.log(tags);
    return Array.from(tags).sort();
  }, [itemsArray]);

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

      // 2. If featured status is the same, then sort by date
      const dateA = new Date(
        a.date.split(" ")[1],
        monthToNumber(a.date.split(" ")[0])
      );
      const dateB = new Date(
        b.date.split(" ")[1],
        monthToNumber(b.date.split(" ")[0])
      );

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [itemsArray, sortOrder]);

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
        item.description.toLowerCase().includes(searchQuery.toLowerCase()); // Changed previewText to description

      const matchesTag = selectedTag ? item.type === selectedTag : true; // If no tag selected, all items match

      return matchesSearch && matchesTag;
    });
  }, [sortedItems, searchQuery, selectedTag]);

  const content = (
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
        {/* Tags Filter (assuming ProjectFilter component handles rendering tags) */}
        <ListFilter
          filters={allTags}
          activeFilter={selectedTag}
          onFilterChange={handleTagClick}
        />
      </div>
      <div className="listItems">
        {filteredItems.map((item, index) => {
          if (type === 1) {
            return <ProjectTile project={item} type={"project"} key={index} />;
          } else if (type === 2) {
            return (
              <ProjectTile project={item} type={"justForFun"} key={index} />
            );
          } else {
            return <BlogTile post={item} key={index} />;
          }
        })}
      </div>
    </div>
  );

  return <BasicLayout title={types[type]} content={content} />;
}
