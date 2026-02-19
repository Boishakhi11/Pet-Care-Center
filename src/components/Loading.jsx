import React from "react";
import loadingImage from "/Paw Loop.mp4";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-40 h-40 object-contain"
      >
        <source src={loadingImage} type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;
