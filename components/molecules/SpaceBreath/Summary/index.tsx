import { Button } from "@chakra-ui/react";
import { MailIcon } from "@heroicons/react/outline";
import React from "react";
import { OutlineBtn } from "../../../atoms";
import LeftSide from "./LeftSide";

const Summary = () => {
  return (
    <div className=" flex gap-x-10">
      <LeftSide />
      <div className="flex flex-col gap-y-[30px] w-[352px] ">
        <div className="bg-white">
          <div className="flex justify-between pl-5 pr-11 py-[13px] rounded-[4px] shadow-[1px_1px_7px_rgba(0,0,0,0.2)] ">
            <p className="border-r-[1px] border-[#D9D9D9] pr-[18px] text-[#898880] text-[14px] leading-[22px] font-bold items-center ">
              シェア
            </p>
            <div className="flex [&>img]:h-[30px] [&>img]:w-30px gap-x-5 ">
              <img src="/img/message.png" alt="message" />
              <img src="/img/facebook.png" alt="facebook" />
              <img src="/img/skype.png" alt="skype" />
              <img src="/img/line.png" alt="line" />
            </div>
          </div>
          {/* rightside-2nd box */}
          <div className="bg-white px-[30px] pb-[30px] pt-1 rounded-[4px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
            <div className="rounded-[4px] bg-[#F3F2ED] flex justify-between px-[15px] py-3  items-center">
              <p className="border-r-[1px] border-[#D9D9D9] pr-11 text-[#898880] text-[14px] leading-[22px] font-bold ">
                会員利用
              </p>
              <p className="leading-[30px] font-bold ">
                ￥20,000〜
                <span className="text-[#898880] text-[12px]"> /時間</span>
              </p>
            </div>
            <div className="rounded-[4px] bg-[#F3F2ED] flex justify-between px-[15px] py-3 mt-[10px] mb-5 items-center">
              <p className="border-r-[1px] border-[#D9D9D9] pr-11 text-[#898880] text-[14px] leading-[22px] font-bold ">
                会員利用
              </p>
              <p className="leading-[30px] font-bold ">
                ￥20,000〜
                <span className="text-[#898880] text-[12px]"> /時間</span>
              </p>
            </div>
            <Button
              backgroundColor="#80722A"
              className="w-full rounded-sm text-white font-bold leading-[30px]"
            >
              問い合わせする
            </Button>
          </div>
        </div>
        {/* right side -3rd box */}
        <div className="bg-white p-5">
          <div className="flex gap-x-5 items-center mb-6 ">
            <div className="h-[81px] w-[81px] from-[#E9E7DE] to-[#C5BFA2] bg-gradient-to-b flex justify-center items-center rounded-full">
              <img src="/img/user.png" alt="user" className="h-11 w-[42px] " />
            </div>
            <div className="">
              <p className="text-[#898880] text-[14px] font-bold ">運営者</p>
              <p className="text-[18px] leading-[33px] font-bold text-[#0C0C0C]">
                斉藤 晴久
              </p>
            </div>
          </div>
          <p className="text-[#898880] text-[14px] font-bold mb-2">
            職種・強み
          </p>

          <div className="flex flex-wrap gap-[10px] [&>p]:px-2 [&>p]:bg-[#E9E7DE] [&>p]:rounded-sm [&>p]:text-[12px] [&>p]:leading-[25px] ">
            <p>組織・人事制度に強い</p>
            <p>組織・人事制度に強い</p>
            <p>組織・人事制度に強い</p>
            <p>組織・人事制度に強い</p>
          </div>

          <p className="text-[#898880] text-[14px] font-bold mb-2 mt-6">
            価値観
          </p>
          <div className="  gap-x-[10px] ">
            <OutlineBtn
              name="励ます"
              className="[&>p]:text-[#0C0C0C] [&>p]:text-[12px] [&>p]:leading-[25px]  !h-[27px] "
            />
            <OutlineBtn
              name="個性"
              className="[&>p]:text-[#0C0C0C] [&>p]:text-[12px] [&>p]:leading-[25px]  !h-[27px] "
            />
            <OutlineBtn
              name="誇り"
              className="[&>p]:text-[#0C0C0C] [&>p]:text-[12px] [&>p]:leading-[25px]  !h-[27px] "
            />
            <OutlineBtn
              name="プロフェッショナル"
              className="[&>p]:text-[#0C0C0C] [&>p]:text-[12px] [&>p]:leading-[25px]  !h-[27px] "
            />
            <OutlineBtn
              name="優しさ"
              className="[&>p]:text-[#0C0C0C] [&>p]:text-[12px] [&>p]:leading-[25px]  !h-[27px] "
            />
          </div>

          <p className="text-[#898880] text-[14px] font-bold mb-1 mt-[21px]">
            モットー
          </p>
          <p className=" text-[14px] leading-[22px]">
            “世界中の誰もが、どこでも豊かに働き生きられる社会へ。世界中の誰もが、どこでも豊かに働き生きられる社会へ。”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
