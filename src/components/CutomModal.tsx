import Modal from "react-responsive-modal";

const CustomModal = ({
  open,
  onCloseModal,
  selectedSeat,
}: {
  open: boolean;
  onCloseModal: () => void;
  selectedSeat: string;
}) => {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      showCloseIcon={false}
      styles={{
        modal: {
          background: "#1B1B1B",
          color: "#fff",
          borderRadius: "10px",
          height: "300px",
          padding: "1rem",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <p className="text-2xl text-center font-bold mb-5">
        You have selected seat {selectedSeat}
      </p>
    </Modal>
  );
};

export default CustomModal;
