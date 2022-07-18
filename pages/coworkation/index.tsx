import React from "react";
import { CoworkationCard } from "../../components";
import COWORKATION from "../../coworkationApi";

const Coworkation = () => {
  return (
    <div className="bg-[#F5F5F5] h-screen">
      <div className="pt-[25px] pb-20 bg-[#FFFFFF] h-[751px] w-full ">
        <div>
          <h2 className="text-[#F5F5F5] text-[160px] leading-[110%] font-bold relative">
            POINT
          </h2>
          <div className="absolute top-[75px] px-24">
            <h2 className="pb-[10px] text-[#1B1B1B] leading-[140%] text-[30px] font-bold">
              企業の合宿・研修・ワーケーション手配に関するお悩みを解決できます！
            </h2>
            <p className="text-[#2E2E2E] leading-[34px] text-[18px] font-medium">
              コワーケーション.comは、企業の合宿やオフサイトミーティング時に最適な滞在施設、研修・体験コンテンツ、そして必要な機材準備まで一括で手配するコンシェルジュ型サービスです。コワーケーションの準備をすべてお任せください。
            </p>
          </div>
        </div>
        <div className="flex gap-x-9 mt-[50px]  px-24">
          {COWORKATION.map((elem: any, id) => (
            <CoworkationCard
              key={id}
              img={elem.img}
              card={elem.card}
              title={elem.title}
              facilities={elem.facilites}
              desc={elem.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coworkation;
