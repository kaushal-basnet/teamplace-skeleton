import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OutlineBtn } from "../../atoms";

const Header = () => {
  return (
    <div className="h-20 w-full flex items-center  justify-between px-10 ">
      {/* left side */}
      <div className="flex gap-x-12">
        <div>
          <Link href="/">
            <a>
              <Image
                src="/img/logo.png"
                alt="logo"
                width="162px"
                height="25px"
              />
            </a>
          </Link>
        </div>
        <div className="flex  items-center gap-x-[30px] [&>a]:font-semibold text-[#0C0C0C] text-[14px] leading-4">
          <Link href="/">
            <a className="headerAnchorTag">ワークプレイスをさがす</a>
          </Link>
          <Link href="/">
            <a className="headerAnchorTag">イベントをさがす</a>
          </Link>
          <Link href="/">
            <a className="headerAnchorTag">人のつながりをさがす</a>
          </Link>
        </div>
      </div>
      {/* right side */}
      <div className="flex  items-center gap-x-[30px] [&>a]:font-semibold text-[#0C0C0C] text-[14px] leading-4">
        <Link href="/">
          <a className="headerAnchorTag">スペースを登録する</a>
        </Link>
        <Link href="/">
          <a className="headerAnchorTag">ログイン</a>
        </Link>
        <OutlineBtn className="!h-8 w-[97px]" name="新規登録" />
      </div>
    </div>
  );
};
export { Header };
