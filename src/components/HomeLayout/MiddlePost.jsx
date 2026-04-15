import React, { use } from "react";
import NewsCard from "../NewsCard";
import Title from "../Title";

const fetchAllNews = fetch("/news.json").then((res) => res.json());

const MiddlePost = () => {
  const news = use(fetchAllNews);
  return (
    <>
      <Title title="Dragon News" />
      {news.map((news) => {
        return <NewsCard key={news.id} news={news} />;
      })}
    </>
  );
};

export default MiddlePost;
