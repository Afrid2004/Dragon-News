import React from "react";
import Social from "../Social";
import QZone from "../QZone";

const RightAside = () => {
  return (
    <div className="sticky top-[-4rem]">
      <div className="social bg-white p-3 rounded-xl border border-gray-300/70 mb-3">
        <h3 className="font-bold mb-2">Find us on</h3>
        <Social />
      </div>
      <div className="social bg-white p-3 sticky top-20 rounded-xl border border-gray-300/70">
        <h3 className="font-bold mb-2">Q-Zone</h3>
        <QZone />
      </div>
    </div>
  );
};

export default RightAside;
