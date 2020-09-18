import React, { useState, useEffect } from 'react';
import RO from './ro';

const STEPS = 15;
const INTERVAL = 300;
function Teatro() {
  const [step, setStep] = useState(0);
  const [up, setUp] = useState(true);
  const [go, setGo] = useState(true);
  const [pausas, setPausas] = useState(false);

  const doStep = (up, step) => {
    // console.log('a', step, up);
    if (up) {
      if (step < STEPS) {
        setStep((s) => s + 1);
      } else {
        setUp(false);
      }
    } else {
      if (step > 0) {
        setStep((s) => s - 1);
      } else setUp(true);
    }
  };

  useEffect(() => {
    if (go) {
      const t = setTimeout(
        () => doStep(up, step),
        pausas ? (step % (STEPS / 3) ? INTERVAL : INTERVAL * 5) : INTERVAL
      );
      return () => clearTimeout(t);
    }
  }, [up, step, go, pausas]);

  // console.log('b', step, up);

  // const c = step / STEPS;

  const p = (...args) => {
    const l = args.length;
    const f = (step * (l - 1)) / STEPS;
    const i = Math.min(l - 2, Math.floor(f));
    const c = f - i;
    console.log(step, { l, f, i, c });
    return Math.round(args[i] + (args[i + 1] - args[i]) * c);
  };

  const s = (...args) => {
    const l = args.length;
    const i = Math.min(l - 1, Math.floor((step * l) / STEPS));
    return args[i];
  };
  return (
    <>
      <RO step={step} p={p} STEPS={STEPS} s={s} />
      <button onClick={() => setGo((g) => !g)}>{go ? 'pause' : 'go'}</button>
      <button onClick={() => setPausas((g) => !g)}>
        {pausas ? 'continuo' : 'con pausas'}
      </button>
    </>
  );

  // const q = `${p(60, 60, 40)},${p(40, 50, 60)}`;
  // const q1 = `${p(60, 46, 40)},${p(54, 50, 46)}`;
  // const l = `${p(60, 80, 40)},${p(20, 50, 80)}`;

  // const d = `M 40,20 L 40,40 C 40,54 ${q1} ${q} L ${l}`;
  // console.log(step, up, d);
  // return (
  //   <svg viewBox={`0 0 100 100`} xmlns="http://www.w3.org/2000/svg" width="60%">
  //     <path strokeWidth={1} fill="none" stroke="black" d={d} />
  //     <circle
  //       strokeWidth={1}
  //       fill="none"
  //       stroke="blue"
  //       cx="50"
  //       cy="40"
  //       r="10"
  //     />{' '}
  //     <path
  //       strokeWidth={1}
  //       fill="none"
  //       stroke="gray"
  //       d="M20,20 L20,40 C 20,80 80,80 80,40 L 80,20"
  //     />
  //     <circle
  //       strokeWidth={1}
  //       fill="none"
  //       stroke="blue"
  //       cx="50"
  //       cy="40"
  //       r="30"
  //     />{' '}
  //     <circle
  //       strokeWidth={1}
  //       fill="green"
  //       stroke="green"
  //       cx={p(60, 60, 40)}
  //       cy={p(40, 50, 60)}
  //       r="2"
  //     />
  //     <circle
  //       strokeWidth={1}
  //       fill="silver"
  //       stroke="silver"
  //       cx={40}
  //       cy={54}
  //       r="2"
  //     />
  //     <circle
  //       strokeWidth={1}
  //       fill="yellow"
  //       stroke="yellow"
  //       cx={p(60, 46, 40)}
  //       cy={p(54, 50, 46)}
  //       r="2"
  //     />
  //     <circle
  //       strokeWidth={1}
  //       fill="red"
  //       stroke="red"
  //       cx={p(60, 80, 40)}
  //       cy={p(20, 50, 80)}
  //       r="2"
  //     />
  //   </svg>
  // );
}

export default Teatro;
