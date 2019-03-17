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
    overflow: auto;
    margin: 48px;
    width: 500px;
    min-height: 30vh;
    max-width: 80vw;
    padding: 2em 3em;
    position: relative;
    box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
}
  }
  .close {
    position: absolute;
    top: 0.3em;
    right: 0.3em;
    padding: 0.3em;
    font-size: 2rem;
    height: 1em;
    width: 1em;
    text-indent: 10em;
    overflow: hidden;
    background: none;
    color: black;
    border: 0;
    cursor: pointer;
  }
  .close::after{
    position: absolute;
    line-height: 0.5;
    top: 0.2em;
    left: 0.2em;
    text-indent: 0;
    content:'\00D7';
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
        <button type="button" className="close" onClick={toggleModal}>Close</button>
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
