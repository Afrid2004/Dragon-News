import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard";
import { NewsLoading } from "../../components/Loading";
import NotFound from "../../components/NotFound";
import Title from "../../components/Title";

const CategoryPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [post, setPost] = useState(null);

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

  if (post === null) {
    return <NewsLoading />;
  }

  return (
    <>
      <Title title="Categories | Dragon News" />
      <div>
        {post.length ? (
          post.map((news) => {
            return <NewsCard news={news} key={news.id} />;
          })
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default CategoryPage;
