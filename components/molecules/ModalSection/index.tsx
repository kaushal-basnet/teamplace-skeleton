import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { OutlineBtn } from "../../atoms";
import { useTranslation } from "next-i18next";
import DATA from "../../../searchArray";
import { callbackify } from "util";
interface Props {
  onClose: any;
  closeOnOverlayClick: boolean;
  isOpen: boolean;
  name: string;
  selectedJob: string[];
  setSelectedJob: any;
  selectedvalue: string[];
  setselectedvalue: any;
  selctedhobbies: string[];
  setselctedhobbies: any;
}

const ModalSection = ({
  onClose,
  closeOnOverlayClick,
  isOpen,
  name,
  selectedJob,
  setSelectedJob,
  selectedvalue,
  setselectedvalue,
  selctedhobbies,
  setselctedhobbies,
}: Props) => {
  const { t } = useTranslation();

  //only selected array case:
  const onSelect = (selectedValue: string, index: number) => {
    if (name === t("Job type / strength")) {
      if (selectedJob.includes(selectedValue)) {
        // remove from selected array
        const remainingItems = selectedJob.filter(
          (item: string, id: number) => {
            return item !== selectedValue;
          }
        );
        setSelectedJob([...remainingItems]);
      } else {
        // else show the all selected array data
        setSelectedJob([...selectedJob, selectedValue]);
      }
    }
    if (name === t("Values")) {
      if (selectedvalue.includes(selectedValue)) {
        const remainingItems = selectedvalue.filter(
          (item: string, id: number) => {
            return item !== selectedValue;
          }
        );
        setselectedvalue([...remainingItems]);
      } else {
        setselectedvalue([...selectedvalue, selectedValue]);
      }
    }
    if (name === t("Hobbies / favorite")) {
      if (selctedhobbies.includes(selectedValue)) {
        const remainingItems = selectedvalue.filter(
          (item: string, id: number) => {
            return item !== selectedValue;
          }
        );
        setselctedhobbies([...remainingItems]);
      } else {
        setselctedhobbies([...selctedhobbies, selectedValue]);
      }
    }
    // console.log(selectedvalue, "value");
  };

  const isPresent = (item: any) => {
    if (name === t("Job type / strength")) {
      return selectedJob.includes(item);
    } else if (name === t("Values")) {
      return selectedvalue.includes(item);
    } else {
      return selctedhobbies.includes(item);
    }
  };
  // console.log("job", jobValue);
  return (
    <>
      <Modal
        closeOnOverlayClick={closeOnOverlayClick}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]  [&>div]:bg-[#E9E7DE] [&>div]:px-2 [&>div]:rounded-sm [&>div]:text-[12px] [&>div]:text-[#0C0C0C] [&>div]:leading-[25px] [&>div]:tracking-[0.3px]">
              {(name === t("Job type / strength")
                ? DATA.job_Values
                : name === t("Values")
                ? DATA.value_Values
                : DATA.hobbies_Values
              ).map((item: string, ind: number) => (
                <div
                  key={ind}
                  // store in array while select
                  onClick={() => onSelect(item, ind)}
                  className={`cursor-pointer ${
                    isPresent(item) ? "!bg-[#80722A] !text-white" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </ModalBody>

          <ModalFooter className="flex justify-start gap-x-4">
            <OutlineBtn
              className="!text-[14px] !bg-[#80722A] [&>p]:text-white [&>p]:hover:text-[#80722A]"
              name="Explore"
            />
            <div onClick={onClose}>
              <OutlineBtn className="!text-[14px]" name="Cancel" />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export { ModalSection };
