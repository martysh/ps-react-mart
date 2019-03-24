import React, { useRef, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import StyledModal from './StyledModal';

function Modal(props) {
  const { open: initOpen, toggleModal, children } = props;
  console.log(`Modal isOpen ${initOpen}`);
  const node = useRef();

  const reducer = (open, action) => {
    switch (action.type) {
      case 'toggle':
        return toggleModal();
      case 'click': {
        if (!open) return false;
        if (node.current.contains(action.target)) return true;
        return toggleModal();
      }
      default:
        throw new Error('unexpected action');
    }
  };
  const [isOpen, dispatch] = useReducer(reducer, initOpen);

  const onToggleClick = e => {
    dispatch({ type: 'toggle' });
  };
/*   const handleClick = e => {
    if (!isOpen || node.current.contains(e.target)) return;

    toggleModal();
  }; */

  useEffect(() => {
    console.log(`Running effect for ${isOpen}`);
    const dispatchClick = e =>
      dispatch({ type: 'click', target: e.target, event: e });

    document.addEventListener('mousedown', dispatchClick);
    return () => {
      document.removeEventListener('mousedown', dispatchClick);
    };
  }, []);

  return (
    <StyledModal open={isOpen}>
      <div ref={node} className="overlay-inner">
        <button type="button" className="close" onClick={onToggleClick}>
          Close
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
