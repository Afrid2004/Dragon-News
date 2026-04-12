import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const filteredNews = data.filter((news) => news.category_id == id);
    setFilter(filteredNews);
  }, [data, id]);

  return <div>Total {filter.length} News Found</div>;
};

export default CategoryPage;
