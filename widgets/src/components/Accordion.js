//import useState from react in order to work with state in functional components
import React, { useState } from "react";

const Accordion = ({ items }) => {
  // make sure you declare your state method by using the useState hook, passing the name as well as set+name
  // making use of array destructuring
  // first element of the useState array will be assigned activeIndex,
  // second element of useState will be assigned setActiveIndex
  // pass in the initial value into the useState function, in this case null
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    //update the activeIndex with the setter function setActiveIndex
    setActiveIndex(index);
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
  return (
    <div className="ui styled accordion">
      {renderedItems}
      {/* //print out the activeIndex from the stateobject */}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
