import React from "react";
import { SocialData } from "../../public/data";

const Social = () => {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {SocialData.map((data) => {
        return (
          <a key={data.id} href={data.url} target="_blank">
            <div className="flex items-center gap-2 p-2 bg-gray-100/90 border border-gray-200 rounded-sm hover:bg-gray-300/50">
              <img src={data.icon} className="w-5" alt={data.name} />
              <p>{data.name}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Social;
