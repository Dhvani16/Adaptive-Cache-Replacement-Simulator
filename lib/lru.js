function simulateLRU(trace, cacheSize) {
    let hits = 0;
    let misses = 0;
    let evictions = 0;

    const cache = new Map();

    for (const item of trace) {
        if (cache.has(item)) {
            hits++;

            cache.delete(item);
            cache.set(item, true);
        } else {
            misses++;

            if (cache.size === cacheSize) {
                const lruKey = cache.keys().next().value;
                cache.delete(lruKey);
                evictions++;
            }

            cache.set(item, true);
        }
    }

    return {
        hits,
        misses,
        evictions
    };
}

module.exports = simulateLRU;