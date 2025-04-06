# 💰 TrackIt - Expense Tracker Web App

A sleek and minimal **Expense Tracker Web App** that lets you track your **savings**, **spendings**, and **money history** — all in one place. Built with **HTML, CSS, and JavaScript**, this project focuses on simplicity, clarity, and responsiveness for all screen sizes.

---

## 🚀 Features

✅ **Real-Time Balance Display** – See your current balance instantly as you add or spend money.  
✅ **History Tracker** – Visual breakdown of each transaction with color-coded entries.  
✅ **Add Income or Expenses** – Simple two-button functionality to manage all money movements.  
✅ **Persistent Storage** – All your data is saved using `localStorage` (remains even after refreshing).  
✅ **Responsive Design** – Optimized layout for desktops, tablets, and mobile devices.  
✅ **Reset Button** – Clear all data with one click when starting fresh.  

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Responsive Design), JavaScript (Vanilla ES6+)
- **Data Persistence:** LocalStorage (built-in browser storage)

---

## 📂 Project Structure

```bash
📦 TrackIt-Expense-Tracker
├── 📄 index.html        # Main app layout
├── 📄 style.css         # Custom styling and layout
├── 📄 utility.css       # Utility classes (flex, grid, spacing, etc.)
├── 📄 script.js         # Core logic for tracking and UI updates
└── 📄 README.md         # Project overview
```

---

## 📜 Installation & Usage

Clone the repository:
```sh
git clone https://github.com/your-username/trackit-expense-tracker.git
cd trackit-expense-tracker
```

Open `index.html` in your browser:
```sh
start index.html   # Windows
open index.html    # macOS
```

Or use **Live Server** (recommended with VS Code):
```sh
npx live-server
```

---

## 🎯 How to Use

1️⃣ Enter a **reason** and **amount** in the input fields.  
2️⃣ Click **"Add Money"** to increase your balance.  
3️⃣ Click **"Expense"** to deduct money and log it.  
4️⃣ Watch your history update in real time.  
5️⃣ Click **"Reset All"** to start over.

✅ Transactions are stored locally — reload the page and nothing is lost!

---

## 🐞 Known Issues & Fixes

🔹 **History Reset on Reload (Fixed)** – Added logic to persist and reload transaction history via `localStorage`.  
🔹 **Input Validation** – Basic checks in place to prevent invalid entries.  
🔹 **Expense Overdraw Protection** – Prevents spending more than your balance.

> Still improving!

---

## 🌟 Show Your Support!

If you like this project, **give it a ⭐ on GitHub** and share it!  
Follow my journey on [LinkedIn](https://www.linkedin.com/in/lakshita-singh-sisodia-796266290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app) and [Twitter (X)](https://x.com/Grap_Proximity?t=J0aAhk-Sl1jH-QwNhquyxg&s=08).  
