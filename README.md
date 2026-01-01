# ⏱ Countdown Timer (15 / 30 / 45)

A simple **vanilla JavaScript countdown timer** that lets users select a preset duration (15, 30, or 45 seconds) and start a countdown.

While the timer is running, all controls are temporarily disabled to prevent changes mid-countdown.

---

## ✨ Features

- ⏲ Preset timer options: **15s / 30s / 45s**
- 🖱 Click-based selection using `<p>` elements
- 🔒 UI lock during countdown (`pointer-events: none`)
- 🎯 Real-time counter updates every second
- ⚡ No libraries or frameworks

---

## 🧠 How It Works

1. User selects a time preset  
2. UI updates visually (highlight + scale)
3. When **Start** is clicked:
   - Countdown begins
   - All controls are disabled
4. When countdown finishes:
   - Controls are re-enabled
   - Timer resets interaction state

The timer logic is handled using recursive `setTimeout()` calls.

---

## 🛠 Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)

---

