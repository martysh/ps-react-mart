import React from 'react';
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
  ${props => props.open && `
    display: grid;
    align-items: center;
    justify-items: center;
  `}
  .overlay-inner {
    background: white;
    width: 700px;
    min-height: 400px;
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
  return (
    <StyledModal open={props.open}>
      <div className="overlay-inner">
      <button className="close" onClick={props.toggleModal}>× Close</button>
        {props.children}
      </div>
    </StyledModal>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Modal.defaultProps = {
  open: false,
  toggleModal : e=> console.log('onClose'),
  children: <div>Some modal text goes here</div>
}

export default Modal;
