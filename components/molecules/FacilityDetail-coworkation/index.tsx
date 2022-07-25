import { ChevronRightIcon } from "@heroicons/react/outline";
import EllipseIcon from "../../../assets/ellipse.svg";

const FacilityDetail = () => {
  return (
    <>
      <div className="text-center text-white grid grid-rows-2 grid-flow-col gap-4 h-[416px]  [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:rounded-md ">
        <img className="row-span-2 " src="/img/img2.png" alt="img1" />
        <img src="/img/profilepic.jpg" alt="img2" />
        <img src="/img/1.jpeg" alt="img3" />
        <img src="/img/anonymous.jpeg" alt="img4" />
        <div className="relative ">
          <img
            className="rounded-md   h-full w-full object-cover"
            src="/img/img1.png"
            alt="img5"
          />
          <div className="absolute h-full w-full top-0 left-0  bg-black opacity-70 rounded-md got"></div>
          <p className=" absolute h-full w-full  flex justify-center items-center  top-0 left-0 text-[18px] leading-[140%] font-bold  ">
            写真をもっと見る
            <span className="pl-[3px]">
              <ChevronRightIcon className="w-[17px] h-[17px] text-white bg-[#F95F00] rounded-full" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export { FacilityDetail };
