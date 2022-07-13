import { Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";
interface Props {
  name: string;
  className?: string;
}
const OutlineBtn = ({ name, className }: Props) => {
  const { t } = useTranslation();
  return (
    <Button
      className={`hover:!bg-white ${className}`}
      border="1px"
      borderColor="#80722A"
      backgroundColor="white"
      borderRadius="2px"
    >
      <p className="text-[#80722A]">{t(name)}</p>
    </Button>
  );
};
export { OutlineBtn };
