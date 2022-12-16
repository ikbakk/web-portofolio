import React from "react";

const PhotoCard = ({ url }) => {
  return (
    <div className="flex basis-1/2">
      <div className="h-full w-full overflow-hidden shadow-offset9tl shadow-fadeBlack outline outline-2 outline-fadeBlack">
        <img className="" src={url} />
      </div>
    </div>
  );
};

export default PhotoCard;
