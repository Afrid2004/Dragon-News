import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import React from "react";
import MarqueeImport from "react-fast-marquee";
const Marquee = MarqueeImport.default || MarqueeImport;

const LatestNewsAndDate = () => {
  console.log(Marquee);
  return (
    <div className="bg-white border-t border-b border-gray-300/70">
      <div className="flex container justify-between items-center gap-2">
        <div className="latest-news grow">
          <div className="flex gap-2 items-center">
            <button className="px-4 py-2 bg-primary text-white shrink-0">
              Latest News
            </button>
            <Marquee pauseOnHover={true} autoFill={true} speed={80}>
              <div className="flex gap-4 items-center mr-4">
                <p className="marque-before">
                  Lorem ipsum dolor, Lorem, ipsum dolor sit amet consectetur
                  adipisicing.
                </p>
                <p className="marque-before">
                  Lorem ipsum dolor, Lorem ipsum dolor sit, amet consectetur
                  adipisicing.
                </p>
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
