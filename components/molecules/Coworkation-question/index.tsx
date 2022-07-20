import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Question = () => {
  return (
    <>
      <div className="relative lg:px-24 pt-[102px] pb-[79px]">
        <h2 className="absolute text-[#ffffff] text-[160px] leading-[110%] font-bold top-0 left-[-20px]">
          QUESTION
        </h2>
        <div className="relative">
          <p className="font-bold leading-[140%] text-[30px] text-[#1b1b1b] mb-[10px]">
            よくあるご質問
          </p>
          <p className="text-[18px] leading-[30px] font-medium text-[#2e2e2e]">
            コワーケーション.comに関するよくあるご質問と回答をまとめました。
          </p>
        </div>

        <div className="bg-[#ffffff] rounded-md w-full flex flex-col p-[27px] gap-y-[8px] my-[35px]">
          <div className=" flex justify-between">
            <h3 className="text-[20px] leading-[140%] text-[#1b1b1b] text-bold ">
              コワーケーション.comへの申し込みや内容の依頼はどうすればいいですか？
            </h3>
            <ChevronDownIcon className="w-[25px] h-[25px] text-white bg-[#F95F00] rounded-full" />
          </div>

          <p className="text-[16px] leading-7 text-[#1b1b1b]">
            詳細は、キャンセルポリシーをご確認ください。
          </p>
        </div>
        <div className="text-center">
          <Button
            variant="outline"
            borderColor=" 1px solid #F95F00"
            color="#F95F00"
            borderRadius="50px"
            width="350px"
            height="61px"
            margin="auto"
            textAlign="center"
          >
            <p className="text-[18px] leading-[140%] font-bold ">もっと見る</p>
          </Button>
        </div>
      </div>
    </>
  );
};
export { Question };
