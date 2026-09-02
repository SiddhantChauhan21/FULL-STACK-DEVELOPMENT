import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return (
    <div>
      <h2>Stopwatch</h2>

      <h3>{elapsed} seconds</h3>

      <button onClick={() => setRunning(true)} disabled={running}>
        Start
      </button>

      <button onClick={() => setRunning(false)} disabled={!running}>
        Pause
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}
