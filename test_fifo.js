const simulateFIFO = require("./src/fifo");

const trace = ["A", "B", "C", "A", "D", "B", "A"];
const cacheSize = 3;

const result = simulateFIFO(trace, cacheSize);
console.log(result);