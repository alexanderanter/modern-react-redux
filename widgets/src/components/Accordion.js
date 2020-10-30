import React from "react";

const Accordion = ({ items }) => {
  const onTitleClick = (index) => {
    console.log("Title clicked", `item-${index}`);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={`item-${index}`}>
        {/* make sure you call onTitleClick with an arrowfunction
          otherwise the function would be called when everything gets rendered and not when clicking! */}
        <div onClick={() => onTitleClick(index)} className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
