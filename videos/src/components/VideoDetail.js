import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Search and choose a video...</div>;
  }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
