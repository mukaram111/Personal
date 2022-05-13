import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import ModalpicOne from "../../assets/images/download.png";

import './SectionOneModal.css'
import './startExploringStyle.css'

const SectionOneModal = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <>

      <Button variant="primary" onClick={handleShow} className='walletbtn'>
      Continue with wallet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    



    </>
  );
};

export default SectionOneModal;
