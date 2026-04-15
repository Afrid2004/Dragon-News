import { format } from "date-fns";
import React from "react";
import { TrimWords } from "../utility/TrimText";
import { Bookmark, Eye, Share2 } from "lucide-react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, total_view, image_url, details, author, rating } = news;

  const handleErrorImage = (e) => {
    e.target.onerror = null;
    e.target.src = "/images/demo_scenery.jpg";
  };
  return (
    <div className="not-last:mb-3">
      <div className="bg-white p-3 rounded-xl border border-gray-300/70">
        <div className="news-topper mb-3">
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
              <div>
                <img
                  src={`${author.img ? author.img : "/images/demo_profile.jpg"}`}
                  alt={author.name}
                  className="rounded-full w-12 border border-gray-300 p-0.5"
                />
              </div>
              <div>
                <a className="font-bold flex items-center gap-1" href="#">
                  {author.name}
                  <img
                    src="/images/verified.png"
                    alt="verified"
                    className="w-5"
                    title="Verified by Dragon News"
                  />
                </a>
                <small>
                  Published on{" "}
                  {format(new Date(author.published_date), "d MMMM yyyy")}
                </small>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-sm cursor-pointer w-fit px-2 py-1">
                <Bookmark className="w-5" />
              </div>
              <div className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-sm cursor-pointer w-fit px-2 py-1">
                <Share2 className="w-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="news-middle mb-3">
          <Link to={`/news/${id}`} className="hover:underline">
            <h1 className="text-2xl font-medium mb-3">{title}</h1>
          </Link>
          <img
            src={image_url || "/images/demo_scenery.jpg"}
            alt={title}
            onError={handleErrorImage}
            className="aspect-4/3 rounded-lg mb-3 w-full border border-gray-300/70"
          />
          <p>
            {TrimWords(details, 35)}
            <Link
              to={`/news/${id}`}
              className="text-primary cursor-pointer hover:underline font-medium"
            >
              Read More
            </Link>
          </p>
        </div>
        <div className="news-bottom flex items-center justify-between gap-3 border-t border-gray-300/70 pt-3">
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-2 shrink-0">
              <img src="/images/rating.png" alt="rating" className="w-4" />
              <img src="/images/rating.png" alt="rating" className="w-4" />
              <img src="/images/rating.png" alt="rating" className="w-4" />
              <img src="/images/rating.png" alt="rating" className="w-4" />
              <img src="/images/rating_half.png" alt="rating" className="w-4" />
            </div>
            <p>{rating.number}</p>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-5" />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
