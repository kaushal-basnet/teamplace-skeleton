import Image from "next/image";
import React from "react";
import { OutlineBtn } from "../../atoms";

const Card = () => {
  return (
    <div className="h-[348px] p-[30px] border-[1px] border-[#D9D9D9] flex gap-x-10">
      <div className="">
        <Image
          src="/img/profilepic.jpg"
          alt="pp"
          height={172}
          width={172}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col  w-full ">
        <div className="flex justify-between">
          <p className="text-[16px] leading-[30px] text-[#898880] font-bold drop-shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            “世界中の誰もが、どこでも豊かに働き生きられる社会へ”
          </p>
          <OutlineBtn
            className="w-[242px] !h-[40px] !bg-[#80722A] [&>p]:text-white"
            name="フォロー"
          />
        </div>

        <div className="flex gap-x-[10px] [&>p]:leading-[30px] [&>p]:text-[#0C0C0C]">
          <h2 className="font-bold text-[30px] leading-[18px] text-[#0C0C0C]">
            斉藤 晴久
          </h2>
          <p>(Isa Saito)</p>
        </div>
        <div className="flex gap-x-5  my-[18px] [&>p]:leading-[30px] [&>p]:text-[#0C0C0C]">
          <p>株式会社AnyWhere</p>
          <p>代表取締役</p>
        </div>
        <div className="flex gap-x-[10px] [&>h4]:bg-[#E9E7DE] [&>h4]:px-2 [&>h4]:rounded-sm [&>h4]:text-[12px] [&>h4]:text-[#0C0C0C] [&>h4]:leading-[25px] [&>h4]:tracking-[0.3px] ">
          <h6 className="text-[12px] text-[#898880] leading-[25px] tracking-[0.3px]">
            職種・強み
          </h6>
          <h4>組織・人事制度に強い</h4>
          <h4>組織・人事制度に強い</h4>
          <h4>組織・人事制度に強い</h4>
        </div>
        <div className="flex mt-[17px] mb-5">
          <h6 className="mr-10 text-[10px] text-[#898880] leading-[25px] tracking-[0.3px]">
            価値観
          </h6>
          <div className="flex gap-x-[10px] [&>button]:!h-[27px] ">
            <OutlineBtn className="button" name="励ます" />
            <OutlineBtn className="button" name="個性" />
            <OutlineBtn className="button" name="誇り" />
            <OutlineBtn className="button" name="プロフェッショナル" />
            <OutlineBtn className="button" name="優しさ" />
          </div>
        </div>
        <div
          className="flex gap-x-[33px] pb-[2px] [&>div>h6]:text-[12px] [&>div>h6]:text-[#898880] [&>div>h6]:leading-[25px] [&>div>h6]:tracking-[0.3px] [&>div>h6]:mr-5
         [&>div>p]:leading-[30px] [&>div>p]:text-[#0C0C0C]
        "
        >
          <div className="flex">
            <h6>出身</h6>
            <p>福岡県北九州市</p>
          </div>
          <div className="flex">
            <h6>居住地</h6>
            <p>東京都文京区,福岡県北九州市</p>
          </div>
          <div className="flex">
            <h6>関わりのある地域</h6>
            <p>福岡県北九州市</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Card };
