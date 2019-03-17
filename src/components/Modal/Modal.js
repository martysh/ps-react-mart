import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  z-index: 2;
  ${props =>
    props.open &&
    `
    display: grid;
    align-items: center;
    justify-items: center;
  `}
  .overlay-inner {
    background: white;
    width: 700px;
    min-height: 30vh;
    max-width: 80vw;
    padding: 20px;
    position: relative;
  }
  .close {
    position: absolute;
    top: 0.2em;
    right: 0.2em;
    background: none;
    color: black;
    border: 0;
  }
`;

function Modal(props) {
  const { open, toggleModal, children } = props;
  const node = useRef();

  useEffect(() => {
    const handleClick = e => {
      if (!open || node.current.contains(e.target)) return;

      toggleModal();
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [open]);

  return (
    <StyledModal open={open}>
      <div ref={node} className="overlay-inner">
        <button type="button" className="close" onClick={toggleModal}>
          × Close
        </button>
        {children}
      </div>
    </StyledModal>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Modal.defaultProps = {
  open: false,
};

export default Modal;
