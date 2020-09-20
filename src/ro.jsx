import React from 'react';

const RO = ({ p, backColor, width, ...rest }) => {
  return (
    <svg
      viewBox={`-100 -100 800 1200`}
      xmlns="http://www.w3.org/2000000/svg"
      width={width}
    >
      <g {...rest}>
        <use
          href="#U"
          x={0}
          y={400}
          transform={`rotate(${p(0, 45, 90, 135, 180)},300,700)`}
        />
        <use
          href="#U"
          x={0}
          y={0}
          transform={`rotate(${p(90, 45, 0, 0, 0)},300,300)`}
        />
        <rect
          x={0}
          y={p(0, 200, 300, 300, 300)}
          width={200}
          height={p(700, 400, 300, 500, 400)}
        />
        <rect x={400} y={300} width={200} height={p(0, 0, 400, 400, 400)} />
      </g>
    </svg>
  );
};

export default RO;
