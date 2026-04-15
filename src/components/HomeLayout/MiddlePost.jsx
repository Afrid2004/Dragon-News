import React, { use } from "react";
import NewsCard from "../NewsCard";

const fetchAllNews = fetch("/news.json").then((res) => res.json());

const MiddlePost = () => {
  const news = use(fetchAllNews);
  return (
    <>
      {news.map((news) => {
        return <NewsCard key={news.id} news={news} />;
      })}
    </>
  );
};

export default MiddlePost;
