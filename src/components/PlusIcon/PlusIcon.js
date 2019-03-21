import React from 'react';

function PlusIcon(props) {
  return (
    <svg width="16" height="16" {...props} aria-label="Add" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M12,22 L12,2 M2,12 L22,12"
      />
    </svg>
  );
}

export default PlusIcon;
