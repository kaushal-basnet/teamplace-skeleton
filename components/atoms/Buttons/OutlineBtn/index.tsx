import { Button } from "@chakra-ui/react";
import React from "react";
interface Props {
  name: string;
  className?: string;
}
const OutlineBtn = ({ name, className }: Props) => {
  return (
    <Button
      className={`hover:!bg-white ${className}`}
      border="1px"
      borderColor="#80722A"
      backgroundColor="white"
      borderRadius="2px"
    >
      <p className="text-[#80722A]">{name}</p>
    </Button>
  );
};
export { OutlineBtn };
