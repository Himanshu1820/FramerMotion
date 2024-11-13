import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((items, index) => {
        return <Card key={index} data={items} reference={ref} />;
      })}
    </div>
  );
};

export default Foreground;
