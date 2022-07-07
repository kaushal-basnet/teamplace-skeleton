import React from "react";

const Footer = () => {
  return (
    <div className="h-[177px] w-full bg-[#0C0C0C] text-white px-[170px] my-[173px] flex flex-col  justify-center">
      <div className="flex justify-evenly leading-8 text-[14px] tracking-[0.3px] capitalize">
        <p>運営会社（株式会社AnyWhere）</p>

        <p>利用規約</p>

        <p>ワークプレイス利用規約</p>

        <p>プライバシーポリシー</p>

        <p>お問い合わせ</p>
      </div>
      <p className="flex justify-center mt-[41px] leading-8 text-[14px] tracking-[0.2px] capitalize">
        © Anywhere,Inc.{" "}
      </p>
    </div>
  );
};
export { Footer };
