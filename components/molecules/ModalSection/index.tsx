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
  filter: any;
  setfilter: any;
  settoggle: any;
}

const ModalSection = ({
  onClose,
  closeOnOverlayClick,
  isOpen,
  name,

  filter,
  setfilter,
  settoggle,
}: Props) => {
  const [select, setselect] = useState({
    selectedJob: [] as string[],
    selectedvalue: [] as string[],
    selectedhobbies: [] as string[],
  });
  const { t } = useTranslation();

  //During click on value if any value includes than remove that included value  or add old values and new value in select array
  const onSelect = (elem: any, index: number) => {
    if (name === t("Job type / strength")) {
      if (select.selectedJob.includes(elem)) {
        // remove from selected array
        const remainingItems = select.selectedJob.filter(
          (item: string, id: number) => {
            return item !== elem;
          }
        );
        // console.log(select.selectedJob);
        //select is object{make sure changing job value does not hamper others values so...filter, and select to update exact value=>selectedJob:[] }
        setselect({ ...select, selectedJob: [...remainingItems] });
      } else {
        // else show the all selected array data
        setselect({
          ...select,
          selectedJob: [...select.selectedJob, elem],
        });
      }
    }
    if (name === t("Values")) {
      if (select.selectedvalue.includes(elem)) {
        const remainingItems = select.selectedvalue.filter(
          (item: string, id: number) => {
            return item !== elem;
          }
        );
        setselect({ ...select, selectedvalue: [...remainingItems] });
      } else {
        setselect({
          ...select,
          selectedvalue: [...select.selectedvalue, elem],
        });
      }
    }
    if (name === t("Hobbies / favorite")) {
      if (select.selectedhobbies.includes(elem)) {
        const remainingItems = select.selectedhobbies.filter(
          (item: string, id: number) => {
            return item !== elem;
          }
        );
        setselect({ ...select, selectedhobbies: [...remainingItems] });
      } else {
        setselect({
          ...select,
          selectedhobbies: [...select.selectedhobbies, elem],
        });
      }
    }
    // console.log(selectedvalue, "value");
  };
  //  included value from select array
  const isPresent = (item: any) => {
    if (name === t("Job type / strength")) {
      return select.selectedJob.includes(item);
    } else if (name === t("Values")) {
      return select.selectedvalue.includes(item);
    } else {
      return select.selectedhobbies.includes(item);
    }
  };
  // filter while explore:callback function
  const onSearch = () => {
    if (name === t("Job type / strength")) {
      setfilter({ ...select, selectedJob: [select.selectedJob] });
      settoggle(false);
    }
    if (name === t("Values")) {
      setfilter({ ...select, selectedvalue: [select.selectedvalue] });
      settoggle(false);
    }
    if (name === t("hobbies")) {
      setfilter({ ...select, selectedhobbies: [select.selectedhobbies] });
      settoggle(false);
    }
  };
  // empty the select array
  const onCancel = () => {
    if (name === t("Job type / strength")) {
      setselect({ ...select, selectedJob: [] });
      settoggle(true);
    }
    if (name === t("Values")) {
      setselect({ ...select, selectedvalue: [] });
      settoggle(true);
    }
    if (name === t("hobbies")) {
      setselect({ ...select, selectedhobbies: [] });
      settoggle(true);
    }
    // console.log(select);
  };
  const onExit = () => {
    // settoggle(true)
  };
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
          <ModalCloseButton onClick={onExit} />
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
            <div
              onClick={() => {
                onClose();
                onSearch();
              }}
            >
              <OutlineBtn
                className="!text-[14px] !bg-[#80722A] [&>p]:text-white [&>p]:hover:text-[#80722A]"
                name="Explore"
              />
            </div>

            <div
              onClick={() => {
                onClose();
                onCancel();
              }}
            >
              <OutlineBtn className="!text-[14px]" name="Cancel" />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export { ModalSection };
