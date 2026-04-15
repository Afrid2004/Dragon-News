import React, { useEffect } from "react";
import { Link } from "react-router";

const RelatedPost = ({ newsData }) => {
  const { id, title, image_url, details } = newsData;
  const handleErrorImage = (e) => {
    e.target.onerror = null;
    e.target.src = "/images/demo_scenery.jpg";
  };
  return (
    <div className=" p-2 rounded-xl border border-gray-300/70 flex gap-2 flex-col">
      <img
        className="mb-3 aspect-3/2  border border-gray-300/70 rounded-lg w-full"
        src={image_url || "/images/demo_scenery.jpg"}
        alt={title}
        onError={handleErrorImage}
      />
      <Link to={`/news/${id}`}>
        <h2 className="font-bold line-clamp-2 hover:underline">{title}</h2>
      </Link>
      <p className="line-clamp-2 text-sm text-gray-600">{details}</p>
    </div>
  );
};

export default RelatedPost;
