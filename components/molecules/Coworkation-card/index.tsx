import React from "react";
interface Props {
  card: number;
  title: string;
  facilities: string;
  desc: string;
  img: any;
}
const CoworkationCard = ({ card, title, facilities, desc, img }: Props) => {
  return (
    <div
      className={
        " relative flex flex-col text-white p-5 rounded-[10px] w-full xl:w-[394px]   xl:p-[35px] md:w-[calc(50%-20px)] md:last:flex-1 xl:last:flex-auto"
      }
      // Tailwind CSS doesn't really deal with dynamic data, so use inline css
      style={{ backgroundImage: `url(/img/${img})` }}
    >
      <div className=" bg-[#1b1b1b] mix-blend-multiply opacity-70 absolute inset-0 rounded-[10px]"></div>
      <div className="flex flex-col gap-[6px]  xl:gap-y-[10px] relative">
        <div className="flex gap-[6px] text-[#F95F00] items-center leading-[110%] mb-[13px] text-[18px] font-medium">
          Case <span className="text-[40px]  font-semibold">{card}</span>
        </div>
        <div className="border-dashed border-b-[1px]  mb-[26px] border-white w-full">
          <p className="text-[22px] font-bold pb-7 leading-[140%] ">{title}</p>
        </div>

        <p className="text-[18px] font-bold leading-[140%] mb-[10px] ">
          {facilities}
        </p>
        <p className="text-[16px] leading-7">{desc}</p>
      </div>
    </div>
  );
};
export { CoworkationCard };
