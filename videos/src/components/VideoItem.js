import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  console.log(video);
  return (
    <div>
      <div className="video-item item">
        <img
          className="video-thumb ui image"
          width="300px"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header"> {video.snippet.title}</div>
        </div>
        {/* <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        ></iframe> */}
      </div>
    </div>
  );
};

export default VideoItem;
