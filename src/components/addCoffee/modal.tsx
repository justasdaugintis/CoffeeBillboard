import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import CoffeeForm from "./form";
import "./style.scss"

/**
 *  Component responsible for rendering modal with a form
 */
const CoffeeModal: React.FC = () => {

  /**
   *  Local state to control modal 
   */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
          <Button className="addCoffeeButton" variant="success" onClick={handleShow}>
            Add coffee
          </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add coffee details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CoffeeForm handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      </div>
    );
  };

  export default CoffeeModal;