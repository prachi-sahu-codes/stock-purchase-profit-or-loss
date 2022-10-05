let initialPrice = document.querySelector("#initial-price");
let stocksQuantity = document.querySelector("#stocks-quantity");
let currentPrice = document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-btn");
let outputBox = document.querySelector("#output-box");
let errorText = document.querySelector(".error-text");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  hideOutput();
  let ip = Number(initialPrice.value);
  let qty = Number(stocksQuantity.value);
  let curr = Number(currentPrice.value);

  if (ip > 0 && qty > 0 && curr > 0) {
    calculateProfitAndLoss(ip, qty, curr);
  } else if (ip == "" || qty == "" || curr == "") {
    showOutput("Please fill out all the Fields");
    outputBox.style.color = "#fff";
  } else {
    showOutput("Fields should be a positive number");
    outputBox.style.color = "#fff";
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = ((initial - current) * quantity).toFixed(2);
    let lossPercentage = ((loss / (initial * quantity)) * 100).toFixed(2);

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
    outputBox.style.color = "red";
  } else if (current > initial) {
    let profit = ((current - initial) * quantity).toFixed(2);
    let profitPercentage = ((profit / (initial * quantity)) * 100).toFixed(2);

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );

    outputBox.style.color = "green";
  } else {
    showOutput(`No pain no gain and no gain no pain`);
    outputBox.style.color = "#fff";
  }
}

function showOutput(message) {
  outputBox.innerText = message;
}

function hideOutput() {
  outputBox.innerText = "";
}
