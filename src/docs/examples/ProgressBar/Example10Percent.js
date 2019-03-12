import React from 'react';
import ProgressBar from "ps-react/ProgressBar";

/** 10% Percent */
export default function Example10Percent() {
  return (
    <div>
      <ProgressBar percent={10} width={150} height={20} />
    </div>
  )
}
