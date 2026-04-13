import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard";
import { NewsLoading } from "../../components/Loading";
import NotFound from "../../components/NotFound";

const CategoryPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (id == "0") {
      setPost(data);
      setLoading(false);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setPost(filteredNews);
      setLoading(false);
      return;
    }
    const filteredNews = data.filter((news) => news.category_id == id);
    setPost(filteredNews);
    setLoading(false);
  }, [data, id]);

  return (
    <>
      {loading ? (
        <NewsLoading />
      ) : (
        <div>
          {post.length ? (
            post.map((news) => {
              return <NewsCard news={news} key={news.id} />;
            })
          ) : (
            <NotFound />
          )}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
