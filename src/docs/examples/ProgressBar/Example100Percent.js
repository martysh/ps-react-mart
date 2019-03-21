import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** 100% Percent */
export default function Example70Percent() {
  return (
    <div>
      <ProgressBar percent={100} width={150} height={20} />
    </div>
  );
}
