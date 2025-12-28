import { simulate } from "../../lib/simulator";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let { algorithm, cacheSize, trace } = req.body;

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

    const result = simulate(algorithm, cacheSize, trace);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}