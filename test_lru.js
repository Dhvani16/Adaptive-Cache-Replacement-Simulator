const simulateLRU = require("./src/lru");

const trace = ["A", "B", "C", "A", "D", "B", "A"];
const cacheSize = 3;

const result = simulateLRU(trace, cacheSize);
console.log(result);
