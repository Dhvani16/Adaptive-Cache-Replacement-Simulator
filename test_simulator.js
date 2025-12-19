const runSimulation = require("./src/simulator");

const trace = ["A", "B", "C", "A", "D", "B", "A"];
const cacheSize = 3;
const algorithms = ["FIFO", "LRU"];

const result = runSimulation(trace, cacheSize, algorithms);
console.log(result);