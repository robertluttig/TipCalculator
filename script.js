// use document.querySelector to get references to the
// tip percent, total, submit, and split elements
var totalEl = document.querySelector("#total");
// var tipEl = document.querySelector("#tip-amount");
var submitEl = document.querySelector("#submit");
var tipEl = document.querySelector("#tip-percentage");
// var splitEl = document.querySelector("#tip-amount");

// Returns tip for given total and tip %
function calculateTip(total, tipPercentage) {
    // calculate the dollar amount and convert to a string with two decimal places
    var roundedResult = (total * tipPercentage).toFixed(2);
    return roundedResult;
}

// Return total amount including tip
function calculateTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);
}

// Handle click on calculate tip button
function handleCalculateTip(event) {
    // prevent the default form behavior (prevents page from reloading)
    event.preventDefault();

    // get tip input and convert to decimal
    var tipPercentage = parseFloat(tipEl.value) * 0.01;

    // get user input for total
    var total = totalEl.value;

    var tipAmount = calculateTip(total, tipPercentage);
    var newTotal = calculateTotal(tipAmount, total);
    document.querySelector("#tip-amount").textContent = tipAmount;
    document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}


// add click listener for the submitEl which runs handleCalculateTip
submitEl.addEventListener("click", handleCalculateTip);