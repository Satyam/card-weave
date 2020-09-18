import React from 'react';

const U = ({ backColor = 'white' }) => {
  return (
    <svg
      viewBox={`0 0 600 600`}
      xmlns="http://www.w3.org/2000000/svg"
      width="0"
    >
      {' '}
      <g id="U">
        <circle cx={300} cy={300} r={300} />
        <rect x={0} y={300} width={600} height={300} fill={backColor} />
        <circle cx={300} cy={300} r={100} fill={backColor} />
        <rect x={0} y={300} width={200} height={200} />
        <rect x={400} y={300} width={200} height={200} />
        <circle cx={100} cy={500} r={100} />
        <circle cx={500} cy={500} r={100} />
      </g>
    </svg>
  );
};

export default U;
