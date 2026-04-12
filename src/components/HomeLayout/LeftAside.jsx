import React, { use } from "react";
import { NavLink } from "react-router";

const fetchCategories = fetch("/categories.json").then((res) => res.json());

const LeftAside = () => {
  const categories = use(fetchCategories);

  return (
    <div className="bg-white border border-gray-300/70 rounded-xl p-3">
      <div className="flex items-center gap-2">
        <h3 className="font-medium uppercase">All Categories</h3>
        <span className="w-5 h-5 flex items-center justify-center rounded-sm bg-primary/15 border border-primary/20  text-primary">
          {categories.length}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-2 mt-2 max-h-[400px] overflow-y-auto custom-scroll">
        {categories.map((category) => {
          return (
            <NavLink
              to={`/category/${category.id}`}
              key={category.id}
              className="bg-gray-100/90 p-2 border border-gray-200 hover:bg-gray-300/50 rounded-sm active-category"
            >
              {category.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default LeftAside;
