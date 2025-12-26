const simulateFIFO = require("./fifo");
const simulateLRU = require("./lru");
const simulateLFU = require("./lfu");
const simulateARC = require("./arc");

function addMetrics(stats) {
    const totalAccesses = stats.hits + stats.misses;

    return {
        ...stats,
        totalAccesses,
        hitRatio: stats.hits / totalAccesses,
        missRate: stats.misses / totalAccesses
    };
}

function runSimulation(trace, cacheSize, algorithms) {
    const results = {};

    for (const algo of algorithms) {
        if (algo === "FIFO") {
            results.FIFO = addMetrics(simulateFIFO(trace, cacheSize));
        }

        if (algo === "LRU") {
            results.LRU = addMetrics(simulateLRU(trace, cacheSize));
        }

        if (algo === "LFU") {
            results.LFU = addMetrics(simulateLFU(trace, cacheSize));
        }

        if (algo === "ARC") {
            results.ARC = addMetrics(simulateARC(trace, cacheSize));
        }
    }

    return results;
}

module.exports = runSimulation;