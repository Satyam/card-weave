import React from 'react';

const U = ({ backColor = 'white' }) => {
  return (
    <svg
      viewBox={`0 0 600 600`}
      xmlns="http://www.w3.org/2000000/svg"
      width="0"
    >
      <g id="U">
        <path
          d={`
          M 0,300 
          A 300,300 180 0 1 600,300 
          L 600,500 
          A 100,100 180 0 1 400,500 
          L 400,300
          A 100,100 180 0 0 200,300
          L 200,500
          A 100,100 180 0 1 0,500
          Z
        `}
        />
      </g>
    </svg>
  );
};

export default U;
