import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button';

storiesOf('Modal', module).add('basic modal', () => {
  function ModalExample() {
    const [showModal, toggleModal] = useState(false);
    const onToggleModal = () => {
      toggleModal(isOpen => !isOpen);
    };
    return (
      <>
        <Button onClick={onToggleModal}>Toggle my Modal</Button>
        <Modal open={showModal} toggleModal={onToggleModal}>
          well hello from the modal!
        </Modal>
      </>
    );
  }
  return <ModalExample />;
});
