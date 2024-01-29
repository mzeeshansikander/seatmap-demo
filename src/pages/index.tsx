import CustomModal from "@/components/CutomModal";
import SeatImage from "@/components/SeatImage";
import Image from "next/image";
import { useState } from "react";

// SeatImage component for rendering seat images with numbers

// Main Home component
export default function Home() {
  const [selectedSeat, setSelectedSeat] = useState<string>("");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);

  const onCloseModal = () => setOpen(false);

  return (
    <div className="bg-[#0F0F0F] flex items-center justify-center h-screen w-screen">
      <div className="bg-[#1B1B1B] h-[90%] w-[90%] m-auto rounded-lg shadow-lg p-5">
        {/* Top Section */}
        <section className="flex justify-center">
          <Image src="/stage.png" alt="Stage" width={400} height={200} />
        </section>

        {/* Middle Section */}
        <section className="flex justify-between items-center my-[3rem]">
          {/* Left Column */}
          <div>
            <div className="flex gap-[4rem]">
              <SeatImage
                src="/seat.png"
                alt="Seat"
                top_Number="10"
                top_NumberRight="15%"
                top_NumberTop="30%"
                // Bottom
                bottom_Number="55"
                bottom_NumberRight="15%"
                bottom_NumberTop="50%"
                rotateDegrees="rotate-[0deg]"
              />
              <SeatImage
                src="/seat_tilt.png"
                alt="Seat"
                top_Number="30"
                top_NumberRight="22%"
                top_NumberTop="35%"
                // Bottom
                bottom_NumberTop="55%"
                bottom_Number="75"
                bottom_NumberRight="25%"
                rotateDegrees="rotate-[0deg]"
              />
            </div>
            <div className="flex gap-[4rem] mt-[5rem]">
              <SeatImage
                src="/seat.png"
                alt="Seat"
                top_Number="80"
                top_NumberRight="15%"
                top_NumberTop="30%"
                // Bottom
                bottom_Number="81"
                bottom_NumberRight="15%"
                bottom_NumberTop="50%"
                rotateDegrees="rotate-[0deg]"
              />
              <SeatImage
                src="/seat_tilt.png"
                alt="Seat"
                top_Number="90"
                top_NumberRight="28%"
                top_NumberTop="28%"
                // Bottom
                bottom_Number="91"
                bottom_NumberRight="18%"
                bottom_NumberTop="45%"
                rotateDegrees="rotate-[330deg]"
              />
            </div>
          </div>

          {/* Center Box */}
          <div
            className="bg-[#612CF7] h-[200px] w-[300px] rounded-lg shadow-lg flex items-center justify-center text-white text-[24px] font-medium"
            onClick={() => {
              setSelectedSeat("you have selected general ticket");
              onOpenModal();
            }}
          >
            General Admission
          </div>

          {/* Right Column */}
          <div>
            <div className="flex gap-[4rem]">
              <SeatImage
                src="/avb_seat_tilt.png"
                alt="Seat"
                top_Number="10"
                top_NumberRight="0%"
                top_NumberTop="35%"
                top_NumberLeft="20%"
                // Bottom
                bottom_Number="55"
                bottom_NumberRight="0"
                bottom_NumberTop="55%"
                bottom_NumberLeft="25%"
                rotateDegrees="rotate-[0deg]"
              />
              <SeatImage
                src="/seat.png"
                alt="Seat"
                top_Number="10"
                top_NumberRight="0%"
                top_NumberLeft="15%"
                top_NumberTop="30%"
                // Bottom
                bottom_Number="55"
                bottom_NumberTop="50%"
                bottom_NumberLeft="15%"
                rotateDegrees="rotate-[180deg]"
              />
            </div>
            <div className="flex gap-[4rem] mt-[5rem]">
              <SeatImage
                src="/seat_tilt.png"
                alt="Seat"
                top_Number="10"
                top_NumberRight="0%"
                top_NumberTop="25%"
                top_NumberLeft="25%"
                // Bottom
                bottom_Number="55"
                bottom_NumberRight="0%"
                bottom_NumberLeft="20%"
                bottom_NumberTop="45%"
                rotateDegrees="rotate-[190deg]"
              />
              <SeatImage
                src="/seat.png"
                alt="Seat"
                top_Number="10"
                top_NumberRight="0%"
                top_NumberLeft="15%"
                top_NumberTop="30%"
                // Bottom
                bottom_Number="55"
                bottom_NumberTop="50%"
                bottom_NumberLeft="15%"
                rotateDegrees="rotate-[180deg]"
              />
            </div>
          </div>
        </section>
      </div>
      <CustomModal
        open={open}
        onCloseModal={onCloseModal}
        selectedSeat={selectedSeat}
      />
    </div>
  );
}
