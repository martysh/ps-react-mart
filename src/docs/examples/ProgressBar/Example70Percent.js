import React from 'react';
import ProgressBar from "ps-react/ProgressBar";

/** 70% Percent */
export default function Example70Percent() {
  return (
    <div>
      <ProgressBar percent={70} width={150} height={10} />
    </div>
  )
}
