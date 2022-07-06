import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <div className="h-[350px] w-full bg-[url('/img/imageSection.png')] flex items-center justify-center tracking-[1.3px]">
      <p className="text-white font-bold leading-[48px] text-[36px] h-[46px]">人物</p>
      {/* <Image
        src="/img/imageSection.png"
        alt="imageSection"
        height="350px"
        width="1440px"
      /> */}
    </div>
  );
};

export { ImageSection };
