function simulateLFU(trace, cacheSize) {
    let hits = 0;
    let misses = 0;
    let evictions = 0;

    const cache = new Map(); // key → frequency
    const order = new Map(); // key → timestamp
    let time = 0;

    for (const item of trace) {
        if (cache.has(item)) {
            hits++;

            const freq = cache.get(item);
            cache.set(item, freq + 1);
            order.set(item, time++);
        } else {
            misses++;

            if (cache.size === cacheSize) {
                let minFreq = Infinity;
                let evictKey = null;
                let oldestTime = Infinity;

                for (const [key, freq] of cache.entries()) {
                    if (
                        freq < minFreq ||
                        (freq === minFreq && order.get(key) < oldestTime)
                    ) {
                        minFreq = freq;
                        oldestTime = order.get(key);
                        evictKey = key;
                    }
                }

                cache.delete(evictKey);
                order.delete(evictKey);
                evictions++;
            }

            cache.set(item, 1);
            order.set(item, time++);
        }
    }

    return {
        hits,
        misses,
        evictions
    };
}

module.exports = simulateLFU;