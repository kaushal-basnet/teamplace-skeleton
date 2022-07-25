import React from "react";
import { Header } from "../../components";

const Space = () => {
  return (
    <>
      <Header />
      <div className=" grid grid-rows-2 grid-flow-col gap-4 h-[416px] [&>img]:h-full [&>img]:w-full [&>img]:object-cover ">
        <div className="relative row-span-2 ">
          <img src="/img/1.jpeg" alt="img1" className=" h-full w-full" />
          <p className="absolute">写真を見る</p>
        </div>
        <img src="/img/img1.png" alt="img2" />
        <img src="/img/img2.png" alt="img3" />
        <img src="/img/profilepic.jpg" alt="img4" />
        <img src="/img/anonymous.jpeg" alt="img5" />
      </div>
    </>
  );
};

export default Space;
