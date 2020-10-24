import React from "react";

//refactored
const ImageCard = (props) => {
  const { description, urls } = props.image;
  return (
    <div>
      <img alt={description} src={urls.regular} />
    </div>
  );
};
export default ImageCard;
