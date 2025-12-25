const simulateFIFO = require("./fifo");
const simulateLRU = require("./lru");
const simulateLFU = require("./lfu");
const simulateARC = require("./arc");

function runSimulation(trace, cacheSize, algorithms) {
    const results = {};

    for (const algo of algorithms) {
        if (algo === "FIFO") {
            results.FIFO = simulateFIFO(trace, cacheSize);
        }

        if (algo === "LRU") {
            results.LRU = simulateLRU(trace, cacheSize);
        }
        if (algo === "LFU") {
            results.LFU = simulateLFU(trace, cacheSize);
        }

        if (algo === "ARC") {
            results.ARC = simulateARC(trace, cacheSize);
        }
    }

    return results;
}

module.exports = runSimulation;