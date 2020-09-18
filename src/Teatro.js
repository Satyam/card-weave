import React, { useState, useEffect } from 'react';
import RO from './ro';

const STEPS = 15;
const INTERVAL = 200;
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

  const p = (...args) => {
    const l = args.length;
    const f = (step * (l - 1)) / STEPS;
    const i = Math.min(l - 2, Math.floor(f));
    const c = f - i;
    // console.log(step, { l, f, i, c });
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
}

export default Teatro;
