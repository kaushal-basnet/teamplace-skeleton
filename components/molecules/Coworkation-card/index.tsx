import React from "react";
interface Props {
  card: number;
  title: string;
  facilities: string;
  desc: string;
  img: any;
}
const CoworkationCard = ({ card, title, facilities, desc, img }: Props) => {
  console.log(img);
  return (
    <div
      className={`w-[394px] h-[436px] bg-[#000000] opacity-70 rounded-[10px] mix-blend-multiply p-[35px] text-white bg-[url('/img/${img}')]`}
    >
      <div className="flex flex-col gap-y-[10px]">
        <p className="text-[#F95F00] leading-[110%] text-[18px] font-medium">
          case <span className="text-[40px] font-semibold">{card}</span>
        </p>
        <div className="border-dashed border-b-[1px] pb-7 mb-[26px] border-white w-full">
          <p className="text-[22px] font-bold leading-[140%] ">{title}</p>
        </div>

        <p className="text-[18px] font-bold leading-[140%]">{facilities}</p>
        <p className="text-[16px] leading-7">{desc}</p>
      </div>
    </div>
  );
};
export { CoworkationCard };
