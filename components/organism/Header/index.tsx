import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OutlineBtn } from "../../atoms";

const Header = () => {
  const { t } = useTranslation();
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
            <a className="headerAnchorTag">{t("Workplace")}</a>
          </Link>
          <Link href="/">
            <a className="headerAnchorTag">{t("Event")}</a>
          </Link>
          <Link href="/">
            <a className="headerAnchorTag">{t("Connections")} </a>
          </Link>
          <Link href="/coworkation" >
            <a className="headerAnchorTag text-2xl hover:text-3xl ">{t("Coworkation")} </a>
          </Link>
        </div>
      </div>
      {/* right side */}
      <div className="flex  items-center gap-x-[30px] [&>a]:font-semibold text-[#0C0C0C] text-[14px] leading-4">
        <Link href="/">
          <a className="headerAnchorTag">{t("Register")} </a>
        </Link>
        <Link href="/">
          <a className="headerAnchorTag">{t("Login")}</a>
        </Link>
        <OutlineBtn className="!h-8 " name={t("sign up")} />
      </div>
    </div>
  );
};
export { Header };
