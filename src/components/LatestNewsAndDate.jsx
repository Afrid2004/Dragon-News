import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import React from "react";

const LatestNewsAndDate = () => {
  return (
    <div className="bg-white border-t border-b border-gray-300/70">
      <div className="flex container justify-between items-center gap-2">
        <div className="latest-news grow">
          <div className="flex gap-2 items-center">
            <button className="px-4 py-2 bg-primary text-white shrink-0">
              Latest News
            </button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium non natus officia Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="date border-l border-gray-300/70 shrink-0">
          <p className="flex items-center gap-1 py-2 pl-5">
            <CalendarDays className="shrink-0 w-4.5" />
            {format(new Date(), "EEEE, Mo MMMM yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsAndDate;
