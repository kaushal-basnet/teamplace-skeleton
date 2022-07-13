import {
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { OutlineBtn } from "../../atoms";
import { SearchIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import { ModalSection } from "../ModalSection";
interface Props {
  selectedJob: string[];
  setSelectedJob: any;
  selectedvalue: string[];
  setselectedvalue: any;
  selctedhobbies: string[];
  setselctedhobbies: any;
}
const SearchSection = ({
  selectedJob,
  setSelectedJob,
  selectedvalue,
  setselectedvalue,
  selctedhobbies,
  setselctedhobbies,
}: Props) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [names, setNames] = useState("");

  return (
    <div className="h-[100px] w-full flex items-center justify-between border-b-[1px] border-b-[#D9D9D9] ">
      <div className="flex gap-x-[4px] [&>button]:!h-8 pt-4">
        <div>
          <ModalSection
            isOpen={isOpen}
            name={names}
            onClose={onClose}
            closeOnOverlayClick={true}
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
            selectedvalue={selectedvalue}
            setselectedvalue={setselectedvalue}
            selctedhobbies={selctedhobbies}
            setselctedhobbies={setselctedhobbies}
          />
        </div>
        <div
          onClick={() => {
            onOpen();
            setNames(t("Job type / strength"));
          }}
        >
          <OutlineBtn className="button" name={t("Job type / strength")} />
        </div>
        <div
          onClick={() => {
            onOpen();
            setNames(t("Values"));
          }}
        >
          <OutlineBtn className="button" name={t("Values")} />
        </div>
        <div
          onClick={() => {
            onOpen();
            setNames(t("Hobbies / favorite"));
          }}
        >
          <OutlineBtn className="button" name={t("Hobbies / favorite")} />
        </div>
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
