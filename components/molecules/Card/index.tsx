import Image from "next/image";
import React from "react";
import { OutlineBtn } from "../../atoms";
interface Props {
  pp: string;
  companyName: string;
  catchPhrase: string;
  lname: string;
  fname: string;
  birthplace: string;
  current: string;
  region: string;
  hobbies: string;
  values: [];
  strength: [];
}
const Card = ({
  pp,
  companyName,
  catchPhrase,
  lname,
  fname,
  birthplace,
  current,
  region,
  hobbies,
  values,
  strength,
}: Props) => {
  return (
    <div className="h-fit p-[30px] border-[1px] border-b-0 last:border-b-[1px] border-[#D9D9D9] flex gap-x-10">
      <div className="">
        <Image
          src={pp}
          alt="pp"
          height={172}
          width={172}
          className="rounded-full object-cover"
        />
      </div>
      {/* <Card key={elem.id} pp={elem.profile_picture } fname={elem.first_name} lname={elem.last_name} catchPhrase={elem.catchphrase} companyName={elem.company_name} jobTitle={elem.job_title} strength={elem.strength} value={elem.value} birthplace={elem.home_town} current={elem.live} region={elem.region} hobbies={elem.hobbies}/> */}

      <div className="flex flex-col  w-full ">
        <div className="flex justify-between">
          <p className="text-[16px] leading-[30px] text-[#898880] font-bold drop-shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            {catchPhrase}
          </p>
          <OutlineBtn
            className="w-[242px] !h-[40px] !bg-[#80722A] [&>p]:text-white [&>p]:hover:text-[#80722A]"
            name="フォロー"
          />
        </div>

        <div className="flex gap-x-[10px] [&>p]:leading-[30px] [&>p]:text-[#0C0C0C]">
          <h2 className="font-bold text-[30px] leading-[18px] text-[#0C0C0C]">
            {lname} {fname}
          </h2>
          {/* <p>(Isa Saito)</p> */}
        </div>
        <div className="flex gap-x-5  my-[18px] [&>p]:leading-[30px] [&>p]:text-[#0C0C0C]">
          <p>{companyName}</p>
        </div>
        <div className="flex">
          <h6 className="mr-12 text-[12px] text-[#898880] leading-[25px] tracking-[0.3px] whitespace-nowrap">
            職種・強み
          </h6>
          <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]  [&>h4]:bg-[#E9E7DE] [&>h4]:px-2 [&>h4]:rounded-sm [&>h4]:text-[12px] [&>h4]:text-[#0C0C0C] [&>h4]:leading-[25px] [&>h4]:tracking-[0.3px]">
            {/* strength */}
            {strength.map((elem, id) => (
              <h4 key={id}>{elem}</h4>
            ))}
            {/* <h4>組織・人事制度に強い</h4>
          <h4>組織・人事制度に強い</h4> */}
          </div>
        </div>
        <div className="flex mt-[17px] mb-5">
          <h6 className="mr-10 text-[10px] text-[#898880] leading-[25px] tracking-[0.3px] whitespace-nowrap">
            価値観
          </h6>
          <div className="flex flex-wrap gap-x-[10px] gap-y-[10px] [&>button]:!h-[27px] [&>button>p]:text-[12px] [&>button>p]:text-[#0C0C0C] [&>button>p]:leading-[25px]">
            {/* values */}
            {values?.map((elem: any, index) => (
              <OutlineBtn className="button" name={elem} key={index} />
            ))}
            {/* <OutlineBtn className="button" name="個性" />
            <OutlineBtn className="button" name="誇り" />
            <OutlineBtn className="button" name="プロフェッショナル" />
            <OutlineBtn className="button" name="優しさ" /> */}
          </div>
        </div>
        <div
          className="flex flex-wrap gap-x-[33px] pb-[2px] leading-[30px] [&>div>h6]:text-[12px] [&>div>h6]:text-[#898880] [&>div>h6]:tracking-[0.3px] [&>div>h6]:mr-5
          [&>div>p]:text-[#0C0C0C]"
        >
          <div className="flex">
            <h6>出身</h6>
            <p>{birthplace}</p>
          </div>
          <div className="flex">
            <h6>居住地</h6>
            <p>{current}</p>
          </div>
          <div className="flex">
            <h6>関わりのある地域</h6>
            <p>{region}</p>
            {/* <p>{hobbies}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export { Card };
