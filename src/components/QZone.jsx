import React from "react";

const QZone = () => {
  return (
    <div className="max-h-100 overflow-y-auto">
      <div className=" p-2 rounded-xl bg-gray-200/30 border border-gray-300/70 not-last:mb-3">
        <img
          className="mb-3 aspect-3/2  border border-gray-300/70 rounded-lg w-full"
          src="/images/swimming.webp"
          alt="swimming"
        />
        <a href="#">
          <h2 className="font-bold text-center">Swimming</h2>
        </a>
      </div>
      <div className=" p-2 rounded-xl bg-gray-200/30 border border-gray-300/70">
        <img
          className="mb-3 aspect-3/2  border border-gray-300/70 rounded-lg w-full"
          src="/images/class.webp"
          alt="class"
        />
        <a href="#">
          <h2 className="font-bold text-center">Class</h2>
        </a>
      </div>
      <div className=" p-2 rounded-xl bg-gray-200/30 border border-gray-300/70">
        <img
          className="mb-3 aspect-3/2  border border-gray-300/70 rounded-lg w-full"
          src="/images/play.webp"
          alt="play"
        />
        <a href="#">
          <h2 className="font-bold text-center">Play Ground</h2>
        </a>
      </div>
    </div>
  );
};

export default QZone;
