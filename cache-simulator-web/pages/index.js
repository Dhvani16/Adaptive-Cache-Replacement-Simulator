import { useState } from "react";

export default function Home() {
  const [algo, setAlgo] = useState("LRU");
  const [size, setSize] = useState(3);
  const [trace, setTrace] = useState("1,2,3,1,4,1");
  const [traceInput, setTraceInput] = useState("1,2,3,1,4,1");
  const [result, setResult] = useState(null);

    async function run() {
        const traceArray = traceInput
            .split(",")
            .map(x => Number(x.trim()))
            .filter(x => !isNaN(x));

        const res = await fetch("/api/simulate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            algorithm: algo,
            cacheSize: size,
            trace: traceInput.split(",").map(Number)
            })
        });

        setResult(await res.json());
    }

  return (
    <div>
      <h1>Cache Simulator</h1>

      <select onChange={e => setAlgo(e.target.value)}>
        <option>LRU</option>
        <option>FIFO</option>
        <option>LFU</option>
        <option>ARC</option>
      </select>

      <input type="number" value={size}
        onChange={e => setSize(+e.target.value)} />

      <textarea value={trace}
        onChange={e => setTrace(e.target.value)} />

      <button onClick={run}>Run</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}