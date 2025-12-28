# Adaptive Cache Replacement Simulator

A web-based simulator for evaluating and comparing cache replacement algorithms under identical memory access workloads.  
This project demonstrates algorithmic trade-off analysis in systems design using practical simulations.

---

## 📌 Features

- Supports multiple cache replacement policies:
  - Least Recently Used (LRU)
  - First-In First-Out (FIFO)
  - Least Frequently Used (LFU)
  - Adaptive Replacement Cache (ARC – simplified)
- Accepts custom memory access traces
- Computes performance metrics:
  - Cache hits
  - Cache misses
  - Evictions
  - Hit ratio
- Side-by-side comparison of all algorithms on the same workload
- Interactive web interface for experimentation

---

## 🧠 Motivation

No single cache replacement algorithm performs optimally across all workloads.  
This simulator enables empirical comparison of different policies, helping users understand their behavior, strengths, and limitations under identical access patterns.

---

## 🛠 Tech Stack

- **Frontend:** Next.js (React)
- **Backend:** Node.js (API routes)
- **Language:** JavaScript
- **Data Structures:** Hash maps, queues, frequency maps
- **Deployment:** Vercel (planned)

---

## 🚀 Getting Started

### 1. Clone the repository
```
git clone https://github.com/your-username/adaptive-cache-simulator.git
cd adaptive-cache-simulator
```

### 2. Install dependencies
```
npm install
```

### 3. Run locally
```
npm run dev
Visit:
http://localhost:3000
```

---

## 🧪 Implementation Notes

- All cache replacement policies are implemented using efficient in-memory data structures.
- The simulator enforces identical workloads across algorithms to ensure fair performance comparison.
- Response normalization is handled at the UI layer to support both single and multi-algorithm evaluations.

---

## 🧪 Example Input

Cache Size: 3
Memory Trace: 1,2,3,1,4,1
The simulator displays comparative results across all algorithms.

---

## 📌 Key Learning Outcomes

- Practical implementation of cache replacement algorithms
- Trade-off analysis between time locality and frequency-based strategies
- Designing fair performance comparisons
- Building a full-stack systems-oriented simulator

---

## 🔗 Live Demo

(Deployed on Vercel – link to be added)

---

## 📄 License

This project is intended for academic and educational use.

---