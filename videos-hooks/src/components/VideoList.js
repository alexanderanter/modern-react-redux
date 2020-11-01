import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos = [], onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect} //pass down the callback function onVideoSelect further
        video={video}
        key={video.id.videoId}
      />
    );
  });
  return (
    <div className="video-thumbs ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;
