import React from "react";
import { useParams } from "react-router";

const CategoryPage = () => {
  const id = useParams();
  console.log(id);
  return <div>CategoryPage</div>;
};

export default CategoryPage;
