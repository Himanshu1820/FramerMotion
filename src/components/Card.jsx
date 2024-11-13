import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-[230px] h-[270px] rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full  ">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 rounded-full flex justify-center items-center bg-zinc-600">
            {data.close ? (
              <IoClose color="#fff" size=".7em" />
            ) : (
              <LuDownload color="#fff" size=".7em" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full p-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex justify-center items-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
