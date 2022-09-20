let initialPrice = document.querySelector("#initial-price");
let stocksQuantity = document.querySelector("#stocks-quantity");
let currentPrice = document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-btn");
let outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  if (ip !== 0 && qty !== 0 && curr !== 0) {
    calculateProfitAndLoss(ip, qty, curr);
  } else {
    alert("Please fill out all Fields");
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = ((initial - current) * quantity).toFixed(2);
    var lossPercentage = ((loss / initial) * 100).toFixed(2);

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
    outputBox.style.color = "red";
  } else if (current > initial) {
    var profit = ((current - initial) * quantity).toFixed(2);
    var profitPercentage = ((profit / initial) * 100).toFixed(2);

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
