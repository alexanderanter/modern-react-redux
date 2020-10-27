import React from "react";

const VideoItem = (props) => {
  return (
    <div>
      <iframe
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
      ></iframe>
    </div>
  );
};

export default VideoItem;
