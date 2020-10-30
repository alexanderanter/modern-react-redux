import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React",
    content: "React is a front end js framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS lib",
  },
  {
    title: "How do you use react?",
    content: "You use it by creating components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
