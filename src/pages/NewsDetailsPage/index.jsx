import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RightAside from "../../components/HomeLayout/RightAside";
import { format } from "date-fns";
import { Bookmark, Eye, Share2 } from "lucide-react";
import NotFound from "../../components/NotFound";
import RelatedPost from "../../components/RelatedPost";
import Title from "../../components/Title";

const NewsDetailsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const handleErrorImage = (e) => {
    e.target.onerror = null;
    e.target.src = "/images/demo_scenery.jpg";
  };

  const filterNews = data.find((data) => data.id == id);
  if (!filterNews) return <NotFound />;
  const relatedCat = data.filter(
    (data) => data.category_id == filterNews.category_id,
  );
  const notCurrent = relatedCat.filter((cat) => cat.id != filterNews.id);

  const {
    category_id,
    title,
    total_view,
    image_url,
    details,
    author,
    rating,
    tags,
  } = filterNews;
  return (
    <>
      <Title title={title} />
      <Navbar></Navbar>
      <main>
        <div className="container py-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-9">
              <div className="mb-10">
                <div className="bg-white p-5 rounded-xl border border-gray-300/70">
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
                          <a
                            className="font-bold flex items-center gap-1"
                            href="#"
                          >
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
                            {format(
                              new Date(author.published_date),
                              "d MMMM yyyy",
                            )}
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
                    <h1 className="text-2xl font-medium mb-3">{title}</h1>

                    <img
                      src={image_url || "/images/demo_scenery.jpg"}
                      alt={title}
                      onError={handleErrorImage}
                      className="aspect-4/3 rounded-lg mb-3 w-full border border-gray-300/70"
                    />
                    <p className=" leading-8">{details}</p>
                  </div>
                  <div>
                    <div className="news-bottom flex items-center justify-between gap-3 border-t border-gray-300/70 pt-3 mb-5">
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center gap-2 shrink-0">
                          <img
                            src="/images/rating.png"
                            alt="rating"
                            className="w-4"
                          />
                          <img
                            src="/images/rating.png"
                            alt="rating"
                            className="w-4"
                          />
                          <img
                            src="/images/rating.png"
                            alt="rating"
                            className="w-4"
                          />
                          <img
                            src="/images/rating.png"
                            alt="rating"
                            className="w-4"
                          />
                          <img
                            src="/images/rating_half.png"
                            alt="rating"
                            className="w-4"
                          />
                        </div>
                        <p>{rating.number}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-5" />
                        <p>{total_view}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {tags.map((tag, index) => {
                        return (
                          <span
                            key={index}
                            className="bg-primary/10 px-3 py-1 text-sm rounded-4xl text-primary border border-primary/50"
                          >
                            #{tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              {notCurrent.length > 0 && (
                <div className="bg-white p-5 rounded-xl border border-gray-300/70">
                  <Link to={`/category/${category_id}`}>
                    <h1 className="mb-3 font-semibold text-lg">Related Post</h1>
                  </Link>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {notCurrent?.map((data) => {
                      return <RelatedPost newsData={data} key={data.id} />;
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-12 lg:col-span-3">
              <RightAside />
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default NewsDetailsPage;
