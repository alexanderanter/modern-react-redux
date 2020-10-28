import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Search and choose a video...</div>;
  }
  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <div className="ui embed">
          <iframe
            title="video player"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          ></iframe>
        </div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
