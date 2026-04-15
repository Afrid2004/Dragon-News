import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import React, { use } from "react";
import MarqueeImport from "react-fast-marquee";
import { Link } from "react-router";
const Marquee = MarqueeImport.default || MarqueeImport;

const fetchAllNews = fetch("/news.json").then((res) => res.json());

const LatestNewsAndDate = () => {
  const allNews = use(fetchAllNews);
  const latestNews = allNews.filter(
    (news) => news.others.is_today_pick == true,
  );
  return (
    <div className="bg-white border-b border-gray-300/70">
      <div className="flex container justify-between items-center gap-2">
        <div className="latest-news overflow-hidden">
          <div className="flex gap-2 items-center">
            <button className="px-4 py-2 bg-primary text-white shrink-0">
              Latest News
            </button>
            <Marquee pauseOnHover={true} autoFill={true} speed={80}>
              <div className="flex gap-4 items-center mr-4">
                {latestNews.map((news) => {
                  return (
                    <Link
                      to={`/news/${news.id}`}
                      className="marque-before"
                      key={news.id}
                    >
                      {news.title}
                    </Link>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
        <div className="date border-l border-gray-300/70 shrink-0">
          <p className="flex items-center gap-1 py-2 pl-5">
            <CalendarDays className="shrink-0 w-4.5" />
            {format(new Date(), "EEEE, d MMMM yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsAndDate;
