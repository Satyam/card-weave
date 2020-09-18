import React, { useState, useEffect } from 'react';

import U from './u';
import RO from './ro';
import OX from './ox';
import XY from './xy';
import YR from './yr';

const STEPS = 20;
const INTERVAL = 200;
function Teatro() {
  const [step, setStep] = useState(0);
  const [up, setUp] = useState(true);
  const [go, setGo] = useState(true);
  const [pausas, setPausas] = useState(true);

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
        pausas ? (step % (STEPS / 4) ? INTERVAL : INTERVAL * 5) : INTERVAL
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
      <U />

      <RO step={step} p={p} STEPS={STEPS} s={s} />
      <OX step={step} p={p} STEPS={STEPS} s={s} />
      <XY step={step} p={p} STEPS={STEPS} s={s} />
      <YR step={step} p={p} STEPS={STEPS} s={s} />
      <button onClick={() => setGo((g) => !g)}>{go ? 'pause' : 'go'}</button>
      <button onClick={() => setPausas((g) => !g)}>
        {pausas ? 'continuo' : 'con pausas'}
      </button>
    </>
  );
}

export default Teatro;
