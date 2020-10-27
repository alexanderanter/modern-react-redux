import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video);
  return (
    <div>
      {/* When a user click on a video we invoke the callback that was passed down as a prop and destructured */}
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          className="video-thumb ui image"
          width="300px"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header"> {video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
