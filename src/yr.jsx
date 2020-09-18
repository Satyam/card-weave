import React from 'react';

const YR = ({ step, p, STEPS, s }) => {
  const fill = `hsl(${p(30, 270)}, 100%, 50%)`;
  const backColor = 'white';
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
        transform={`rotate(${p(180, 150, 120, 90, 90)}, 300, 300)`}
      />
      <circle
        cx={300}
        cy={p(500, 600, 700, 700, 700)}
        r={p(100, 150, 200, 250, 300)}
        fill={fill}
      />
      <rect x={0} y={700} width={600} height={300} fill={backColor} />
      <circle cx={300} cy={700} r={p(0, 0, 0, 50, 100)} fill={backColor} />
      <rect
        x={p(200, 150, 100, 50, 0)}
        y={p(500, 600, 700, 700, 0)}
        width={200}
        height={p(400, 300, 200, 200, 900)}
        fill={fill}
      />
      <rect
        x={p(200, 250, 300, 350, 400)}
        y={p(500, 600, 700, 700, 700)}
        width={200}
        height={p(400, 300, 200, 200, 200)}
        fill={fill}
      />
      <circle cx={p(300, 250, 200, 150, 100)} cy={900} r={100} fill={fill} />
      <circle cx={p(300, 350, 400, 450, 500)} cy={900} r={100} fill={fill} />
      {/* <circle cx={300} cy={400} r={10} fill="red" />
        <text x={700} y={100} style={{ fontSize: '100px' }}>
          {step}
        </text> */}
    </svg>
  );
};

export default YR;
