import React from "react";
import { CoworkationCard, Question } from "../../components";
import COWORKATION from "../../coworkationApi";

const Coworkation = () => {
  return (
    <>
      <div className="relative  h-full max-w-[1440px] m-auto xl:pt-[25px] px-5 lg:px-24 py-[70px] lg:py-[75px] mb-[75px] ">
        <div className=" lg:px-24 xl:top-[75px] lg:relative ">
          {/* <div className=" top-14 px-7 lg:px-24 xl:top-[75px] "> */}
          <h2 className="absolute font-bold  leading-[110%] z-[-1] top-[25px] lg:top-[-56px] left-[-4px] lg:left-1 text-[#F5F5F5] text-[110px]  lg:text-[160px]   ">
            POINT
          </h2>
          <h3 className="mb-[10px] text-[#1b1b1b font-bold leading-[140%] text-[30px] ">
            企業の合宿・研修・ワーケーション手配に関するお悩みを解決できます！
          </h3>
          <h3 className="font-medium text-[#2E2E2E] text-[18px]  leading-[34px]  xl:leading-[34px] ">
            コワーケーション.comは、企業の合宿やオフサイトミーティング時に最適な滞在施設、研修・体験コンテンツ、そして必要な機材準備まで一括で手配するコンシェルジュ型サービスです。コワーケーションの準備をすべてお任せください。
          </h3>

          <div className="flex flex-wrap xl:flex-nowrap  grid-cols-1 gap-[33px] mt-[50px] ">
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

      {/* questions */}
      <div className="relative max-w-[1440px] m-auto px-5  lg:px-24 pt-[102px] pb-[79px] bg-[#F5F5F5]">
        <Question />
      </div>
    </>
  );
};

export default Coworkation;
