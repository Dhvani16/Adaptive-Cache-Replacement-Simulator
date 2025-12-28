import simulateLRU from "./lru";
import simulateFIFO from "./fifo";
import simulateLFU from "./lfu";
import simulateARC from "./arc";

/**
 * Runs a cache simulation
 * @param {string} algorithm - LRU | FIFO | LFU | ARC
 * @param {number} cacheSize
 * @param {number[]} trace
 */
export function simulate(algorithm, cacheSize, trace) {
  if (!Array.isArray(trace)) {
    throw new Error("trace is not iterable");
  }

  if (!algorithm) {
    throw new Error("Algorithm not specified");
  }

  const algo = algorithm.toLowerCase();
  let result;

  switch (algo) {
    case "lru":
      result = simulateLRU(trace, cacheSize);
      break;
    case "fifo":
      result = simulateFIFO(trace, cacheSize);
      break;
    case "lfu":
      result = simulateLFU(trace, cacheSize);
      break;
    case "arc":
      result = simulateARC(trace, cacheSize);
      break;
    default:
      throw new Error("Unknown algorithm");
  }

  return {
    algorithm: algo,
    cacheSize,
    accesses: trace.length,
    ...result,
    hitRatio: result.hits / trace.length
  };
}