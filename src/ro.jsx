import React from 'react';

const RO = ({ step, p }) => {
  const d = [
    //r0
    `M 0,${p(0, 30)}`,
    //r1
    `L 0,90`,
    // r2
    `C 0,104 ${p(20, -4)},${p(104, 100)} ${p(20, 10)},${p(90, 100)}`,
    // r3
    `L ${p(20, 20)},${p(70, 100)}`,
    // r4
    `C  ${p(20, 30)},${p(56, 100)} 
        ${p(40, 30)},${p(56, 100)} 
        ${p(40, 40)},${p(70, 100)}`,
    // r5
    `L ${p(40, 50)},${p(90, 100)}`,
    // r6
    `C ${p(40, 64)},${p(104, 90)} 60,104 60,90`,
    // r7
    `L 60,70`,
    // r8
    `C 60,30 ${p(78.78, 60)},${p(79.81, 90)} ${p(52.11, 60)},50`,
    // r9
    `C ${p(78, 78, 60)},${p(20.19, 10)} 70,0 30,0`,
    // r00
    `C -10,0 ${p(40, -10)},${p(0, -10)} 0,${p(0, 30)}`,
  ];
  return (
    <svg
      viewBox={`-10 -10 120 140`}
      xmlns="http://www.w3.org/2000/svg"
      width="30%"
    >
      <path strokeWidth={1} fill="none" stroke="black" d={d.join(' ')} />
      <circle cx={60} cy={70} r="3" fill="yellow" />
      <circle cx={60} cy={30} r="3" fill="green" />
      <circle cx={p(78.78, 60)} cy={p(79.81, 90)} r="3" fill="red" />
      <circle cx={p(52.11, 60)} cy={50} r="3" fill="blue" />
    </svg>
  );
};

export default RO;
