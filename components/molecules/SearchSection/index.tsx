import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { OutlineBtn } from "../../atoms";
import { SearchIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

const SearchSection = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="h-[100px] w-full flex items-center justify-between border-b-[1px] border-b-[#D9D9D9] ">
      <div className="flex gap-x-[4px] [&>button]:!h-8 pt-4">
        <div>
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{t("Job type / strength")}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]  [&>h4]:bg-[#E9E7DE] [&>h4]:px-2 [&>h4]:rounded-sm [&>h4]:text-[12px] [&>h4]:text-[#0C0C0C] [&>h4]:leading-[25px] [&>h4]:tracking-[0.3px]">
                  <h4>strength</h4>

                  {/* <h4>組織・人事制度に強い</h4>
          <h4>組織・人事制度に強い</h4> */}
                </div>
              </ModalBody>

              <ModalFooter className="flex justify-start gap-x-4">
                <OutlineBtn
                  className="!text-[14px] !bg-[#80722A] [&>p]:text-white [&>p]:hover:text-[#80722A]"
                  name={t("Explore")}
                />
                <div onClick={onClose}>
                  <OutlineBtn className="!text-[14px]" name={t("Cancel")} />
                </div>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div onClick={onOpen}>
          <OutlineBtn className="button" name={t("Job type / strength")} />
        </div>
        <div onClick={onOpen}>
          <OutlineBtn className="button" name={t("Values")} />
        </div>
        <div onClick={onOpen}>
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
