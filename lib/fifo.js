function simulateFIFO(trace, cacheSize) {
    let hits = 0;
    let misses = 0;
    let evictions = 0;

    const cache = new Set();
    const queue = [];

    for (const item of trace) {
        if (cache.has(item)) {
            hits++;
        } else {
            misses++;

            if (cache.size === cacheSize) {
                const evictedItem = queue.shift();
                cache.delete(evictedItem);
                evictions++;
            }

            cache.add(item);
            queue.push(item);
        }
    }

    return {
        hits,
        misses,
        evictions
    };
}

module.exports = simulateFIFO;