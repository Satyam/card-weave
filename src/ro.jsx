import React from 'react';

const RO = ({ step, p, STEPS, s }) => {
  const fill = `hsl(${p(30, 270)}, 100%, 50%)`;

  return (
    <svg
      viewBox={`-10 -10 1000 1200`}
      xmlns="http://www.w3.org/2000000/svg"
      width="25%"
    >
      <use
        href="#U"
        x={0}
        y={400}
        fill={fill}
        transform={`rotate(${p(0, 45, 90, 135, 180)},300,700)`}
      />
      <use
        href="#U"
        x={0}
        y={0}
        fill={fill}
        transform={`rotate(${p(90, 45, 0, 0, 0)},300,300)`}
      />
      <rect
        x={0}
        y={p(0, 200, 300, 300, 300)}
        width={200}
        height={p(700, 400, 300, 500, 400)}
        fill={fill}
      />
      <rect
        x={400}
        y={300}
        width={200}
        height={p(0, 0, 400, 400, 400)}
        fill={fill}
      />
      {/* <circle cx={300} cy={300} r={10} fill="red" /> */}
      <text x={700} y={100} style={{ fontSize: '100px' }}>
        {step}
      </text>
    </svg>
  );
};

export default RO;
