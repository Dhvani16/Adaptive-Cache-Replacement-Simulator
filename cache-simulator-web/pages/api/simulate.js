import { simulate, simulateAll } from "../../lib/simulator";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let { algorithm, cacheSize, trace } = req.body;

    // Normalize trace if it comes as string
    if (typeof trace === "string") {
      trace = trace
        .split(",")
        .map(x => Number(x.trim()))
        .filter(x => !Number.isNaN(x));
    }

    cacheSize = Number(cacheSize);

    if (!Array.isArray(trace)) {
      throw new Error("Trace must be an array");
    }

    let result;

    // ✅ ALL-algorithm comparison support
    if (algorithm === "ALL") {
      result = simulateAll(cacheSize, trace);
    } else {
      result = simulate(algorithm, cacheSize, trace);
    }

    return res.status(200).json(result);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}