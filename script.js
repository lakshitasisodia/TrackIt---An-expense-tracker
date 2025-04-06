let moneydisplay = document.querySelector("#moneydisplay");
let savedmoney = document.querySelector("#currentmoney");
let expenses = document.querySelector("#expense");

let storedmemory = localStorage.getItem("totalmoney");
let savedmemory = localStorage.getItem("savings");
let expmemory = localStorage.getItem("spendings");

let savedCount = savedmemory ? parseFloat(savedmemory) : 0;
let expenseCount = expmemory ? parseFloat(expmemory) : 0;
let moneynow = storedmemory ? parseFloat(storedmemory) : 0;

let input = document.querySelector(".inputtwo");
let typemoney = document.querySelector(".inputone");

function show() {
    moneydisplay.innerText = `₹${moneynow}`;
    savedmoney.innerText = `₹${savedCount}`;
    expenses.innerText = `₹${expenseCount}`;
    input.value = "";
    typemoney.value = "";
}

function loadHistory() {
    const history = document.querySelector("#historytrack");
    history.innerHTML = "";

    let allHistory = JSON.parse(localStorage.getItem("history")) || [];
    allHistory.forEach(item => {
        updatehistory(item.type, item.money, item.n, true); 
    });
}

function updatehistory(type, money, n, skipStorage = false) {
    if (!type || type.trim() === "") {
        alert("Please enter a transaction name.");
        typemoney.value = "";
        return;
    }

    const history = document.querySelector("#historytrack");
    const entry = document.createElement("div");
    entry.classList.add("history", "flex", "align", "jbetween");

    const itemname = document.createElement("div");
    itemname.classList.add("itemname");
    itemname.innerText = type;

    const itemcost = document.createElement("div");
    itemcost.classList.add("itemcost");
    itemcost.innerText = `₹${money}`;

    itemcost.style.color = n === "add" ? "rgb(0, 209, 0)" : "red";

    entry.appendChild(itemname);
    entry.appendChild(itemcost);
    history.appendChild(entry);

    if (!skipStorage) {
        let allHistory = JSON.parse(localStorage.getItem("history")) || [];
        allHistory.push({ type, money, n });
        localStorage.setItem("history", JSON.stringify(allHistory));
    }

    history.scrollTop = history.scrollHeight;
}

document.querySelector(".add").addEventListener("click", () => {
    let money = parseFloat(input.value);
    let type = typemoney.value;

    if (money > 0) {
        moneynow += money;
        savedCount += money;
        localStorage.setItem("totalmoney", moneynow);
        localStorage.setItem("savings", savedCount);
        updatehistory(type, money, "add");
        show();
    } else {
        alert("Please enter a valid amount.");
        input.value = "";
    }
});

document.querySelector(".exp").addEventListener("click", () => {
    let money = parseFloat(input.value);
    let type = typemoney.value;

    if (money < 0) {
        alert("Please enter a positive amount.");
        input.value = "";
        return;
    }

    if (moneynow >= money && money > 0) {
        moneynow -= money;
        expenseCount += money;
        localStorage.setItem("totalmoney", moneynow);
        localStorage.setItem("spendings", expenseCount);
        updatehistory(type, money, "exp");
        show();
    } else {
        alert("Not enough funds...");
        input.value = "";
    }
});

document.querySelector(".reset").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset everything?")) {
        localStorage.clear();
        moneynow = 0;
        savedCount = 0;
        expenseCount = 0;
        document.querySelector("#historytrack").innerHTML = "";
        show();
    }
});

show();
loadHistory();
