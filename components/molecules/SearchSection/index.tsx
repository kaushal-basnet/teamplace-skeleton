import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { OutlineBtn } from "../../atoms";
import { SearchIcon } from "@heroicons/react/outline";

const SearchSection = () => {
  return (
    <div className="h-[100px] w-full flex items-center justify-between border-b-[1px] border-b-[#D9D9D9] ">
      <div className="flex gap-x-[4px] [&>button]:!h-8 pt-4">
        <OutlineBtn className="button" name="職種・強み" />
        <OutlineBtn className="button" name="価値観" />
        <OutlineBtn className="button" name="趣味・好きなこと" />
      </div>
      <div className="pt-4 flex ">
        <InputGroup>
          <InputLeftElement>
            <SearchIcon className="h-[14px] w-[14px] text-[#898880] mb-2" />
          </InputLeftElement>
          <Input className="!h-[31px] !w-[380px] border-[1px] border-[#D9D9D9]" />
        </InputGroup>
      </div>
    </div>
  );
};
export { SearchSection };
