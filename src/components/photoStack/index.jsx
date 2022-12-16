import React from "react";

const PhotoStack = () => {
  return (
    <div className="h-full w-full outline">
      <div className="outline-3 z-1 bg-paleViolet outline outline-fadeBlack">
        a
      </div>
      <div className="outline-3 z-10  bg-paleGreen outline outline-fadeBlack">
        b
      </div>
      <div className="outline-3 z-20 bg-primaryLight outline outline-fadeBlack">
        c
      </div>
    </div>
  );
};

export default PhotoStack;
