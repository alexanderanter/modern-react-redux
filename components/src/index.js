import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today 4:36 PM"
        commentText="nice one!"
        avatarImg={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 1:00 AM"
        commentText="Amazing!"
        avatarImg={faker.image.avatar()}
      />
      <CommentDetail
        author="Ben"
        timeAgo="Yesterday at 3:00PM"
        commentText="Sweet!"
        avatarImg={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
