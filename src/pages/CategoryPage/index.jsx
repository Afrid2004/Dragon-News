import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard";

const CategoryPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setPost(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setPost(filteredNews);
      return;
    }
    const filteredNews = data.filter((news) => news.category_id == id);
    setPost(filteredNews);
  }, [data, id]);

  return (
    <div>
      {post.length
        ? post.map((news) => {
            return <NewsCard news={news} key={news.id} />;
          })
        : "No post found!"}
    </div>
  );
};

export default CategoryPage;
