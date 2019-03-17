import React, {useState} from 'react';
import Modal from 'ps-react/Modal';
import Button from 'ps-react/Button';

export default function ModalExample() {
  const [showModal, toggleModal] = useState(false);
  const onToggleModal = () =>{ toggleModal(!showModal); }
  return (
  <>
    <Button onClick={onToggleModal} >Toggle my Modal</Button>
    <Modal open={showModal} toggleModal={onToggleModal} >
      well hello from the modal!
    </Modal>
  </>);
}
