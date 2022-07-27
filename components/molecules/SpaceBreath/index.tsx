import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {
  BookmarkIcon,
  DownloadIcon,
  LocationMarkerIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { OutlineBtn } from "../../atoms";
import Summary from "./Summary";

const SpaceBreath = () => {
  return (
    <>
      <div className=" pt-[43px]">
        <div className="flex gap-x-[22px] border-b-[1px] border-[#D9D9D9]  pb-12 mx-[170px]">
          <div className="h-[87px] w-[87px] border-[1px] border-[#C5C3BC] rounded-[10px] flex items-center justify-center">
            <img src="/img/logo.png" alt="logo" className="h-[10px]" />
          </div>
          <div>
            <h2 className="text-[30px] leading-[38px] font-bold">
              コワーキングスペースBreathコワーキングスペースBreath
            </h2>
            <p className="pt-[2px] pb-[9px] ">
              コワーキングスペースBreathは、三鷹･吉祥寺エリアで唯一
              赤ちゃんみまもりサービスのあるコワーキング・イベントスペースです。
            </p>
            <Link rel="stylesheet" href="/space/1">
              <a className="text-[#80722A] text-[14px] leading-[22px] flex items-center ">
                <LocationMarkerIcon className="w-[14px] h-[14px]" />
                <span className="underline decoration-solid">
                  東京都三鷹市三鷹1-1-1 三鷹ビルディング２F
                  コワーキングスぺースBreath
                </span>
              </a>
            </Link>
            <div className="flex gap-x-[10px] [&>p]:text-[12px] [&>p]:leading-[25px] pt-7 pb-[23px] ">
              <p>スペースの特徴</p>
              <p className="bg-[#E9E7DE] rounded-sm p-2 flex items-center gap-1 h-[27px] ">
                <span>
                  <DownloadIcon className="h-[10px] w-[10px] text-[#80722A]" />
                </span>
                組織・人事制度に強い
              </p>
              <p className="bg-[#E9E7DE] rounded-sm p-2 flex items-center gap-1  h-[27px] ">
                <span>
                  <DownloadIcon className="h-[10px] w-[10px] text-[#80722A]" />
                </span>
                コミュニケーション重視
              </p>
            </div>
            <div className="flex gap-x-[10px]">
              <p className="text-[12px] leading-[25px]">
                つながりのある人の価値観
              </p>
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
          </div>
        </div>
        <div className="flex items-center mt-3">
          <Tabs className="border-white">
            <TabList className="mx-[170px]">
              <Tab className="!text-[#80722A]">
                <p className="text-[#898880] text-[14px] leading-[22px] mb-5 ">
                  サマリー
                </p>
              </Tab>
              <Tab className="!text-[#80722A]">
                <p className="text-[#898880] text-[14px] leading-[22px] mb-5 ">
                  お知らせ
                </p>
              </Tab>
              <Tab className="!text-[#80722A]">
                <p className="text-[#898880] text-[14px] leading-[22px] mb-5 ">
                  募集・プロジェクト
                </p>
              </Tab>
              <Tab className="!text-[#80722A]">
                <p className="text-[#898880] text-[14px] leading-[22px] mb-5 ">
                  イベント
                </p>
              </Tab>

              <Tab className="!text-[#80722A]">
                <p className="!text-[#80722A] font-bold mr-[10px] mb-5 ">
                  つながり
                </p>
                <OutlineBtn
                  name="12人"
                  className="!bg-[#80722A] [&>p]:text-[white] rounded-sm !h-[22px] mb-5 "
                />
              </Tab>
            </TabList>
            <TabPanels className="px-[170px] bg-[#F4F3EE]">
              <TabPanel className="!p-0 ">
                <Summary />
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/* <Button
            variant="outline"
            borderColor="#80722A"
            borderRadius="2px"
            className="flex justify-between ml-[15px] mr-[10px] mb-[10px]"
          >
            <BookmarkIcon className="h-[13px] w-[10px] text-[#80722A]  mr-[50px] " />

            <p className="text-[#80722A] font-bold leading-[30px] pr-[5px] ">
              保存
            </p>
            <p className="bg-[#C5C3BC] text-white text-[12px] leading-[22px] px-2 rounded-sm ">
              100以上
            </p>
          </Button>
          <OutlineBtn
            name="問い合わせする<"
            className="!bg-[#80722A] [&>p]:text-[white] rounded-sm ] mb-[10px]"
          />
          <Button
            variant="outline"
            borderColor="#D9D9D9"
            className="flex ml-[10px] mb-[10px]"
          >
            <UploadIcon className="h-[13px] w-3 mr-3 " />
            <p className="text-[#898880] text-[14px] font-bold ">シェア</p>
          </Button> */}
        </div>
      </div>
    </>
  );
};
export { SpaceBreath };
