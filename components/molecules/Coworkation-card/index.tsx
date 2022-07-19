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
      className={
        "w-[394px] h-[436px] rounded-[10px]  p-[35px] text-white relative"
      }
      // Tailwind CSS doesn't really deal with dynamic data, so use inline css
      style={{ backgroundImage: `url(/img/${img})` }}
    >
      <div className=" bg-[#000000] mix-blend-multiply opacity-70 absolute inset-0 rounded-[10px]"></div>
      <div className="flex flex-col gap-y-[10px] relative">
        <p className="text-[#F95F00] leading-[110%] text-[18px] font-medium">
          Case <span className="text-[40px] font-semibold">{card}</span>
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
