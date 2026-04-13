import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";

const fetchCategories = fetch("/categories.json").then((res) => res.json());

const LeftAside = () => {
  const categories = use(fetchCategories);
  const [numCategories, setNumCategories] = useState([]);

  const getCategory = async () => {
    try {
      const res = await fetch("/news.json");
      const data = await res.json();
      setNumCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="bg-white border border-gray-300/70 rounded-xl p-3 sticky top-20">
      <div className="flex items-center gap-2">
        <h3 className="font-medium uppercase">All Categories</h3>
        <span className="w-5 h-5 flex items-center justify-center rounded-sm bg-primary/15 border border-primary/20  text-primary">
          {categories.length}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-2 mt-2 max-h-[400px] overflow-y-auto custom-scroll">
        {categories.map((category) => {
          const countCategoryPost = numCategories.filter(
            (cat) => cat.category_id === category.id,
          );
          const breakingPost = numCategories.filter(
            (cat) => cat.others.is_today_pick === true,
          );
          let count = 0;
          if (category.id == "0") {
            count = numCategories.length;
          } else if (category.id == "1") {
            count = breakingPost.length;
          } else {
            count = countCategoryPost.length;
          }
          return (
            <NavLink
              to={`/category/${category.id}`}
              key={category.id}
              className="bg-gray-100/90 flex items-center justify-between gap-2 p-2 border border-gray-200 hover:bg-gray-300/50 rounded-sm active-category"
            >
              {category.name}
              <span>{count}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default LeftAside;
