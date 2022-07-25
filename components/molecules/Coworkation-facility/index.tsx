import { Button } from "@chakra-ui/react";
import EllipseIcon from "../../../assets/ellipse.svg";
const Facility = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center ">
          <h2 className=" mb-[25px] text-[30px] leading-[140%] font-bold">
            コワーケーション.comにあなたの施設や体験を掲載しませんか？
          </h2>
          <p className="pb-[54px] text-[20px] leading-[150%] font-medium">
            コワーケーション.comと一緒に、あたらしいコワーケーションの体験づくりをしていただける方を募集しています。
            <span className="flex justify-center">
              お気軽にお問い合わせください。
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-[33px]">
          <div className="bg-[#F5F5F5] text-[#1b1b1b] py-[33px] pl-[21px] pr-6 rounded-md">
            <h3 className="text-[22px] font-bold leading-[140%] pb-[22px] ">
              「体験」の場をつなげたい
              <span className="text-[#F95F00]"> 施設事業者</span>の方
            </h3>
            <div className="grid grid-cols-2 gap-x-[17px] gap-y-4">
              <p className="text-[16px] leading-[140%] font-medium pt-[9px] pb-3 flex justify-center px-[22px] bg-[#ffffff] rounded-md  ">
                ホテル・旅館
              </p>
              <p className="text-[16px] leading-[140%] font-medium pt-[9px] pb-3 flex justify-center px-[22px] bg-[#ffffff] rounded-md  ">
                キャンプ場
              </p>
              <p className="text-[16px] leading-[140%] font-medium pt-[9px] pb-3 flex justify-center px-[22px] bg-[#ffffff] rounded-md  ">
                会議施設
              </p>
              <p className="text-[16px] leading-[140%] font-medium pt-[9px] pb-3 flex justify-center px-[22px] bg-[#ffffff] rounded-md  ">
                研修施設
              </p>
              <p className="text-[16px] leading-[140%] font-medium pt-[9px] pb-3 flex justify-center px-[22px] bg-[#ffffff] rounded-md  ">
                リゾート施設
              </p>
              <p className="text-[16px] leading-[140%] font-medium pt-[9px] pb-3 flex justify-center px-[22px] bg-[#ffffff] rounded-md  ">
                MICE施設
              </p>
            </div>
            <div className="flex flex-col items-center gap-[7px] pt-[17px] ">
              <EllipseIcon />
              <EllipseIcon />
              <EllipseIcon />
            </div>
          </div>

          <div className="bg-[#F5F5F5] text-[#1b1b1b] py-[33px] pl-[21px] pr-6 rounded-md ">
            <h3 className="text-[22px] font-bold leading-[140%] pb-[22px] ">
              「体験」を届けたい
              <span className="text-[#F95F00]"> コンテンツ事業者</span>の方
            </h3>
            <div className="grid grid-cols-2 gap-x-[17px] gap-y-4 [&>p]:text-[16px] [&>p]:leading-[140%] [&>p]:font-medium [&>p]:pt-[9px] [&>p]:pb-3 [&>p]:justify-center [&>p]:px-[22px] [&>p]:bg-[#ffffff] [&>p]:rounded-md  ">
              <p>研修・ゲームコンテンツ会社</p>
              <p>研修プログラム事業者</p>
              <p>ヨガ講師</p>
              <p>フィットネス講師</p>
              <p>地域ツアー事業者</p>
              <p>ファシリテーター</p>
            </div>
            <div className="flex flex-col items-center gap-[7px] pt-[17px] ">
              <EllipseIcon />
              <EllipseIcon />
              <EllipseIcon />
            </div>
          </div>
        </div>
        <div className="text-center mt-[51px] ">
          <Button
            variant="fill"
            backgroundColor="#F95F00"
            color="#ffffff"
            borderRadius="50px"
            width="350px"
            height="61px"
            margin="auto"
            textAlign="center"
          >
            <p className="text-[18px] leading-[140%] font-bold ">
              事業者登録のお問い合わせ
            </p>
          </Button>
        </div>
      </div>
    </>
  );
};
export { Facility };
