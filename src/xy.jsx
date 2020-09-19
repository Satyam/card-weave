import React from 'react';

const XY = ({ p, fill, backColor }) => {
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
        transform={`rotate(180, 300, 300)`}
      />
      <circle
        cx={300}
        cy={p(700, 700, 700, 600, 500)}
        r={p(300, 250, 200, 150, 100)}
        fill={fill}
      />
      <rect x={100} y={700} width={400} height={300} fill={backColor} />
      <circle cx={300} cy={700} r={p(100, 50, 0, 0, 0)} fill={backColor} />
      <rect
        x={p(0, 50, 100, 150, 200)}
        y={p(700, 700, 700, 600, 500)}
        width={200}
        height={p(200, 200, 200, 300, 400)}
        fill={fill}
      />
      <rect
        x={p(400, 350, 300, 250, 200)}
        y={p(700, 700, 700, 600, 500)}
        width={200}
        height={p(200, 200, 200, 300, 400)}
        fill={fill}
      />
      <circle cx={p(100, 150, 200, 250, 300)} cy={900} r={100} fill={fill} />
      <circle cx={p(500, 450, 400, 350, 300)} cy={900} r={100} fill={fill} />
    </svg>
  );
};

export default XY;
