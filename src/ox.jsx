import React from 'react';

const OX = ({ step, p, STEPS, s }) => {
  const fill = `hsl(${p(30, 270)}, 100%, 50%)`;

  return (
    <svg
      viewBox={`-100 -100 800 1200`}
      xmlns="http://www.w3.org/2000000/svg"
      width="25%"
    >
      <use
        href="#U"
        x={0}
        y={0}
        fill={fill}
        transform={`translate(0,${p(
          400,
          300,
          200,
          100,
          0
        )}), rotate(180, 300, 300)`}
      />
      <use href="#U" x={0} y={p(0, 100, 200, 300, 400)} fill={fill} />
      <rect
        x={0}
        y={500}
        width={200}
        height={p(200, 100, 0, 0, 0)}
        fill={fill}
      />
      <rect
        x={400}
        y={500}
        width={200}
        height={p(200, 100, 0, 0, 0)}
        fill={fill}
      />
      {/* <circle cx={300} cy={400} r={10} fill="red" />
        <text x={700} y={100} style={{ fontSize: '100px' }}>
          {step}
        </text> */}
    </svg>
  );
};

export default OX;
