import React, { useEffect } from "react";
import Modal from "react-modal";

function ErrorModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(props.modal);
  useEffect(() => {}, []);
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Error Modal"
      >
        <h2>Hello</h2>
        <button onClick={() => setIsOpen(false)}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
}

export default ErrorModal;
