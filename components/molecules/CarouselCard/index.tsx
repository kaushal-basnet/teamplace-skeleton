import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { OutlineBtn } from "../../atoms";
interface Props {
  isOpen: any;
  onClose: any;
}
const CarouselCard = ({ isOpen, onClose }: Props) => {
  const [index, setIndex] = useState(1);
  const previousButton = (handler: any) => {
    return (
      <div onClick={handler} className="flex !absolute top-1/2 left-[-258px]">
        <OutlineBtn
          icon={<ChevronLeftIcon />}
          className="!h-8 w-8 !min-w-0 !p-0 "
        />
      </div>
    );
  };
  const nextButton = (handler: any) => {
    return (
      <div onClick={handler} className="flex !absolute top-1/2 right-[-258px]">
        <OutlineBtn
          icon={<ChevronRightIcon />}
          className="!h-8 w-8 !min-w-0 !p-0  text-[#80722A]"
        />
      </div>
    );
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div onClick={onClose} className="flex ">
              <OutlineBtn name="閉じる" className="btn" />
              <p className="m-auto text-[#0C0C0C] leading-[30px] tracking-[0.3px]">
                {index}/5
              </p>
            </div>

            <div className="p-[30px] flex justify-center">
              <Carousel
                className="carousel"
                showStatus={false}
                onChange={(e) => setIndex(e + 1)}
                showIndicators={false}
                renderArrowPrev={(handler) => previousButton(handler)}
                renderArrowNext={(handler) => nextButton(handler)}
              >
                <div>
                  <img src="/img/1.jpeg" />
                  <p className="flex items-center pl-[30px] h-[89px] bg-[#F3F2ED] leading-[30px]">
                    desc 1
                  </p>
                </div>
                <div>
                  <img src="/img/img1.png" />
                  <p className="flex items-center pl-[30px] h-[89px] bg-[#F3F2ED] leading-[30px]">
                    desc 2
                  </p>
                </div>
                <div>
                  <img src="/img/img2.png" />
                  <p className="flex items-center pl-[30px] h-[89px] bg-[#F3F2ED] leading-[30px]">
                    desc 3
                  </p>
                </div>
                <div>
                  <img src="/img/profilepic.jpg" />
                  <p className="flex items-center pl-[30px] h-[89px] bg-[#F3F2ED] leading-[30px]">
                    desc 4
                  </p>
                </div>
                <div>
                  <img src="/img/user.png" />
                  <p className="flex items-center pl-[30px] h-[89px] bg-[#F3F2ED] leading-[30px]">
                    desc 5
                  </p>
                </div>
              </Carousel>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export { CarouselCard };
