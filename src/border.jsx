import React from 'react';

const Border = ({ color = 'black' }) => {
  return (
    <svg
      viewBox={'-100 -300 800 1400'}
      xmlns="http://www.w3.org/2000000/svg"
      width="0"
    >
      <defs>
        <g id="B" stroke={color} strokeWidth={1}>
          <line x1={-100} y1={1000} x2={-100} y2={1100} />
          <line x1={700} y1={1000} x2={700} y2={1100} />
          <line x1={-100} y1={1100} x2={700} y2={1100} />
          <line x1={-100} y1={-200} x2={700} y2={-200} />
          <rect x={-100} y={-200} width={50} height={100} />
          <rect x={650} y={-200} width={50} height={100} />
        </g>
      </defs>
    </svg>
  );
};

export default Border;
