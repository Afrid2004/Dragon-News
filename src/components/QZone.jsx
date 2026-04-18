import React from "react";

const data = [
  {
    id: 1,
    image: "/images/swimming.webp",
    title: "Swimming",
  },
  {
    id: 2,
    image: "/images/class.webp",
    title: "Class",
  },
  {
    id: 3,
    image: "/images/play.webp",
    title: "Play Ground",
  },
  {
    id: 4,
    image: "/images/cycling.webp",
    title: "Cycling Zone",
  },
];

const QZone = () => {
  return (
    <div className="lg:max-h-100 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {data.map((data) => {
        return (
          <div
            key={data.id}
            className=" p-2 rounded-xl bg-gray-200/30 border border-gray-300/70"
          >
            <img
              className="mb-3 aspect-3/2  border border-gray-300/70 rounded-lg w-full"
              src={data.image}
              alt={data.title}
            />
            <a href="#">
              <h2 className="font-bold text-center">{data.title}</h2>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default QZone;
