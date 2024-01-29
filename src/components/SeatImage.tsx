import Image from "next/image";
import { Fragment, useState } from "react";
import Modal from "react-responsive-modal";
import CustomModal from "./CutomModal";

const SeatImage = ({
  src,
  alt,
  rotateDegrees,
  top_Number,
  top_NumberTop,
  top_NumberRight,
  top_NumberLeft,
  // Bottom
  bottom_Number,
  bottom_NumberRight,
  bottom_NumberTop,
  bottom_NumberLeft,
}: {
  src: string;
  alt: string;
  rotateDegrees: string;
  top_NumberTop?: string;
  top_NumberRight?: string;
  top_Number?: string;
  top_NumberLeft?: string;
  bottom_Number?: string;
  bottom_NumberRight?: string;
  bottom_NumberTop?: string;
  bottom_NumberLeft?: string;
}) => {
  const [selectedSeat, setSelectedSeat] = useState<string>("");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);

  const onCloseModal = () => setOpen(false);

  return (
    <Fragment>
      <div className={`relative `}>
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className={`cursor-pointer h-full ${`${rotateDegrees}`}`}
          priority
        />
        {top_Number && (
          <p
            className="cursor-pointer absolute text-white"
            style={{
              top: top_NumberTop,
              right: top_NumberRight,
              left: top_NumberLeft,
            }}
            onClick={() => {
              setSelectedSeat(top_Number);
              onOpenModal();
            }}
          >
            {top_Number}
          </p>
        )}
        {bottom_Number && (
          <p
            className="cursor-pointer absolute text-white"
            style={{
              top: bottom_NumberTop,
              right: bottom_NumberRight,
              left: bottom_NumberLeft,
            }}
            onClick={() => {
              setSelectedSeat(bottom_Number);
              onOpenModal();
            }}
          >
            {bottom_Number}
          </p>
        )}
      </div>
      <CustomModal
        open={open}
        onCloseModal={onCloseModal}
        selectedSeat={selectedSeat}
      />
    </Fragment>
  );
};
export default SeatImage;
