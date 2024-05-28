import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white pt-[18%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-1/4">{title}</h1>
      <p className="text-lg w-1/4 text-justify py-6">{overview}</p>

      <div>
        <button className="bg-white text-black p-3 px-8 text-xl rounded-md hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-3 px-8 text-xl bg-opacity-80 hover:bg-opacity-50 rounded-md">
          {" "}
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
