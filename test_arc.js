const simulateARC = require("./src/arc");

const trace = ["A", "B", "A", "C", "A", "B", "D", "A"];
const cacheSize = 2;

const result = simulateARC(trace, cacheSize);
console.log(result);