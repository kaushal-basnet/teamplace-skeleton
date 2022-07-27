import React from "react";

const LeftSide = () => {
  return (
    <>
      <div className="flex flex-col gap-y-[30px] flex-1 mt-[30px]">
        <div className="bg-white px-[30px] py-5">
          <div className="flex justify-between pb-5 border-b-[1px] border-[#D9D9D9]">
            <p className="text-[18px] leading-[33px] font-bold">アップデート</p>
            <p className="leading-[30px] text-[#80722A] underline ">
              すべて見る
            </p>
          </div>
          <div className="flex mt-5 mb-[17px]">
            <p className="text-[#898880] ">2021.5.10</p>
            <p className="bg-[#898880] text-white text-[12px] leading-[22px] px-2 rounded-sm ml-[10px] mr-2">
              つながり
            </p>
            <p>
              <span className="text-[#80722A]">佐藤昭博</span>
              佐藤昭博さんとつながりました
            </p>
          </div>
          <div className="flex mt-5 mb-[17px]">
            <p className="text-[#898880] ">2021.5.10</p>
            <p className="bg-[#898880] text-white text-[12px] leading-[22px] px-2 rounded-sm ml-[10px] mr-2">
              募集
            </p>
            <p>
              <span className="text-[#80722A]"> webデザイナー募集</span>
              が投稿されました
            </p>
          </div>
          <div className="flex mt-5 mb-[17px]">
            <p className="text-[#898880] ">2021.5.10</p>
            <p className="bg-[#898880] text-white text-[12px] leading-[22px] px-2 rounded-sm ml-[10px] mr-2">
              Twitter
            </p>
            <p>
              <span className="text-[#80722A]">コロナ感染症対策について</span>
              が投稿されました
            </p>
          </div>
        </div>
        <div className="bg-white px-[30px] py-5">hello</div>
        <div className="bg-white px-[30px] py-5">hello</div>
        <div className="bg-white px-[30px] py-5">hello</div>
        <div className="bg-white px-[30px] py-5">hello</div>
      </div>
    </>
  );
};

export default LeftSide;
