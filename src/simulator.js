const simulateFIFO = require("./fifo");
const simulateLRU = require("./lru");

function runSimulation(trace, cacheSize, algorithms) {
    const results = {};

    for (const algo of algorithms) {
        if (algo === "FIFO") {
            results.FIFO = simulateFIFO(trace, cacheSize);
        }

        if (algo === "LRU") {
            results.LRU = simulateLRU(trace, cacheSize);
        }
    }

    return results;
}

module.exports = runSimulation;