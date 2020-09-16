import React from 'react';

const arc = (r, a, ccw, x, y) => `A ${r},${r} ${a} 0 ${ccw ? 1 : 0} ${x},${y}`;
const line = (x, y) => `L ${x},${y}`;
const RO = ({ step, p, STEPS, s }) => {
  const d = [
    //r0
    `M 0,${p(0, 30)}`,
    //r1
    line(0, p(90, 90, 90, 70)),
    // r2
    arc(
      p(10, 10, 10, 30),
      p(180, 180, 135, 90),
      false,
      p(20, 20, 17, 30),
      p(90, 90, 97, 100)
    ),
    // r3
    s(line(p(20, 20, 20, 30), p(70, 90, 100, 100)), '', '', ''),

    // r4
    arc(
      p(10, 10, 19, 0),
      p(180, 180, 90, 0),
      true,
      p(40, 40, 43, 30),
      p(70, 90, 97, 100)
    ),

    // r5

    s(line(p(40, 40, 50, 30), p(90, 90, 100, 100)), '', '', ''),
    // r6
    arc(p(10, 10, 10, 30), p(180, 180, 135, 90), false, 60, p(90, 90, 90, 70)),
    // r7
    line(60, 70),
    // r8
    arc(30, p(41.81, 0), false, p(52.11, 60), p(50, 70)),
    // r8-1
    line(p(52.11, 60), p(50, 30)),
    // r9
    arc(30, p(131.81, 90), false, 30, 0),
    // r10
    line(p(0, 30), 0),
    // r00
    arc(p(0, 30), p(0, 90), false, 0, p(0, 30)),
  ];
  return (
    <svg
      viewBox={`-10 -10 120 140`}
      xmlns="http://www.w3.org/2000/svg"
      width="30%"
    >
      <circle cx={30} cy={70} r="30" fill="green" />
      <circle cx={10} cy={90} r="10" fill="yellow" />
      <circle cx={50} cy={90} r="10" fill="red" />
      <path strokeWidth={1} fill="cyan" stroke="black" d={d.join(' ')} />
    </svg>
  );
};

export default RO;
