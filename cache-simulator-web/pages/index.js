import { useState } from "react";

export default function Home() {
  const [algo, setAlgo] = useState("LRU");
  const [size, setSize] = useState(3);
  const [traceInput, setTraceInput] = useState("1,2,3,1,4,1");
  const [result, setResult] = useState(null);

  async function run() {
    const res = await fetch("/api/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        algorithm: algo,
        cacheSize: size,
        trace: traceInput
      })
    });

    setResult(await res.json());
  }

  // ✅ Normalize result for table rendering
  const tableData =
    result && !Array.isArray(result)
      ? Object.values(result)
      : result;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>Adaptive Cache Replacement Simulator</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Algorithm:&nbsp;
          <select value={algo} onChange={e => setAlgo(e.target.value)}>
            <option value="LRU">LRU</option>
            <option value="FIFO">FIFO</option>
            <option value="LFU">LFU</option>
            <option value="ARC">ARC</option>
            <option value="ALL">ALL (Compare)</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Cache Size:&nbsp;
          <input
            type="number"
            value={size}
            onChange={e => setSize(Number(e.target.value))}
            min="1"
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Memory Access Trace:
          <br />
          <textarea
            value={traceInput}
            onChange={e => setTraceInput(e.target.value)}
            rows={3}
            style={{ width: "100%" }}
          />
        </label>
      </div>

      <button onClick={run} style={{ padding: "8px 16px" }}>
        Run Simulation
      </button>

      {Array.isArray(tableData) && (
        <div style={{ marginTop: "30px" }}>
          <h2>Comparison Results</h2>

          <table
            border="1"
            cellPadding="8"
            style={{
              borderCollapse: "collapse",
              width: "100%",
              textAlign: "center"
            }}
          >
            <thead style={{ backgroundColor: "#f2f2f2" }}>
              <tr>
                <th>Algorithm</th>
                <th>Hits</th>
                <th>Misses</th>
                <th>Evictions</th>
                <th>Hit Ratio</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(r => (
                <tr key={r.algorithm}>
                  <td>{r.algorithm.toUpperCase()}</td>
                  <td>{r.hits}</td>
                  <td>{r.misses}</td>
                  <td>{r.evictions ?? "-"}</td>
                  <td>{r.hitRatio.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ marginTop: "15px", color: "#555" }}>
            All algorithms are evaluated on the same memory access trace to ensure fair comparison.
          </p>
        </div>
      )}
    </div>
  );
}