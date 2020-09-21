import React from 'react';

const OX = ({ p, backColor, width, ...rest }) => {
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
          y={0}
          transform={`
          translate(0,${p(400, 341, 200, 100, 0)}), 
          rotate(${p(180, 135, 90, 135, 180)}, 300, 300)`}
        />
        <use
          href="#U"
          x={0}
          y={0}
          transform={`
          translate(0,${p(0, 59, 200, 300, 400)}),
          rotate(${p(0, -45, -90, -45, 0)},300,300)`}
        />
        <rect x={0} y={500} width={200} height={p(200, 0, 0, 0, 0)} />
        <rect x={400} y={500} width={200} height={p(200, 0, 0, 0, 0)} />
      </g>
      <use href="#B" />
    </svg>
  );
};

export default OX;
