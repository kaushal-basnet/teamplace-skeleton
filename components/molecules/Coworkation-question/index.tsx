import { Button } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { questions } from "../../../coworkationQnaApi";
const Question = () => {
  const [data, setData] = useState(questions);
  const [show, setshow] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <div className="relative lg:px-24 pt-[102px] pb-[79px] bg-[#F5F5F5]">
      <h2 className="absolute text-[#ffffff] text-[160px] leading-[110%] font-bold top-0 left-[-20px]">
        QUESTION
      </h2>
      <div className="relative">
        <p className="font-bold leading-[140%] text-[30px] text-[#1b1b1b] mb-[10px]">
          よくあるご質問
        </p>
        <p className="text-[18px] leading-[30px] font-medium text-[#2e2e2e] mb-[35px]">
          コワーケーション.comに関するよくあるご質問と回答をまとめました。
        </p>
      </div>
      {data.map((elem: any, id: number) => {
        return (
          <div
            className="bg-[#ffffff] rounded-md w-full flex flex-col p-[27px] mb-[22px] "
            key={id}
            onClick={() => setSelectedIndex(id)}
          >
            <div className=" flex justify-between">
              <h3 className="text-[20px] leading-[140%] text-[#1b1b1b] font-bold ">
                {elem.question}
              </h3>
              <p
                onClick={() => {
                  setshow(!show);
                }}
              >
                {show && id === selectedIndex ? (
                  <ChevronDownIcon className="w-[25px] h-[25px] text-white bg-[#F95F00] rounded-full" />
                ) : (
                  <ChevronUpIcon className="w-[25px] h-[25px] text-white bg-[#F95F00] rounded-full" />
                )}
              </p>
            </div>

            {show && id === selectedIndex && (
              <p className="text-[16px] leading-7 text-[#1b1b1b]">
                {elem.answer}
              </p>
            )}
          </div>
        );
      })}

      <div className="text-center mt-[63px] ">
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
  );
};
export { Question };
