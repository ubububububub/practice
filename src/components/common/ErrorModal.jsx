import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorModal({ error }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate("/home");
  };

  return (
    <Modal show={show} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{error.code}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleConfirmClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
