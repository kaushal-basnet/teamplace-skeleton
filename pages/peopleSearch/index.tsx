import React from "react";
import {
  Footer,
  Header,
  ImageSection,
  OutlineBtn,
  SearchSection,
} from "../../components";

const PeopleSearch = () => {
  return (
    <>
      <Header />
      <ImageSection />
      <div className="mx-[170px]">
        <SearchSection />
        <h2 className="my-[50px] leading-[38px] text-[30px] font-bold text-[#0C0C0C] tracking-[0.3px]">
          注目の人
        </h2>
        <div>attention people</div>
        <h2 className="my-[50px] leading-[38px] text-[30px] font-bold text-[#0C0C0C] tracking-[0.3px]">
          価値観の合う人を探そう
        </h2>
      </div>
      <div className="flex justify-center">
        <OutlineBtn className="" name="もっと見る" />
      </div>

      <Footer />
    </>
  );
};

export default PeopleSearch;
