import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../js/action/ActionTasks";

const ModalComponent = ({ handleClose, show, id }) => {
  const dispatch = useDispatch()
  const [taskModified, setTaskModified] = useState('')
  const handleCloseModal=()=>{
    handleClose()
    dispatch(editTask({taskModified,id}))
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type="text" placeholder="Normal text" onChange={(e)=>setTaskModified(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalComponent;
