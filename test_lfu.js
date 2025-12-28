const simulateLFU = require("./src/lfu");

const trace = ["A", "B", "A", "C", "B", "A"];
const cacheSize = 2;

const result = simulateLFU(trace, cacheSize);
console.log(result);