function simulateARC(trace, cacheSize) {
    let hits = 0;
    let misses = 0;
    let evictions = 0;

    const T1 = new Map();
    const T2 = new Map();

    function evictIfNeeded() {
        if (T1.size + T2.size < cacheSize) return;

        if (T1.size > 0) {
            const lruT1 = T1.keys().next().value;
            T1.delete(lruT1);
        } else {
            const lruT2 = T2.keys().next().value;
            T2.delete(lruT2);
        }

        evictions++;
    }

    for (const item of trace) {
        if (T2.has(item)) {
            hits++;
            T2.delete(item);
            T2.set(item, true);
            continue;
        }

        if (T1.has(item)) {
            hits++;
            T1.delete(item);
            T2.set(item, true);
            continue;
        }

        misses++;
        evictIfNeeded();
        T1.set(item, true);
    }

    return {
        hits,
        misses,
        evictions
    };
}

module.exports = simulateARC;