import React from "react";

const Background = () => {
  return (
    <>
      <div className="w-full h-screen fixed z-[2] gilroy">
        <div className="absolute top-[5%] flex justify-center w-full py-10 text-zinc-600 text-xl font-semibold ">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold leading-none tracking-tighter text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
