import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  CarouselCard,
  Header,
  OutlineBtn,
  SpaceBreath,
} from "../../components";

const Space = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <>
        <Header />
        <div className=" grid grid-rows-2 grid-flow-col gap-1 h-[416px] [&>img]:h-full [&>img]:w-full [&>img]:object-cover ">
          <div className="relative row-span-2 ">
            <img src="/img/1.jpeg" alt="img1" className=" h-full w-full" />
            <div className="absolute left-10 bottom-10" onClick={onOpen}>
              <OutlineBtn name={"写真を見る"} className="font-bold" />
              <CarouselCard isOpen={isOpen} onClose={onClose} />
            </div>
          </div>
          <img src="/img/img1.png" alt="img2" />
          <img src="/img/img2.png" alt="img3" />
          <img src="/img/profilepic.jpg" alt="img4" />
          <div className="from-[#E9E7DE] to-[#C5BFA2] bg-gradient-to-b flex justify-center items-center">
            <img
              src="/img/user.png"
              alt="img5"
              className=" h-[107px] w-[103px] "
            />
          </div>
        </div>
        <SpaceBreath />
      </>
    </>
  );
};

export default Space;
