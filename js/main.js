// input field
function valueFromInputField(inputTextId) {
    const inputText = document.getElementById(inputTextId);
    const inputValue = inputText.value;
    const changeInputValue = parseFloat(inputValue);
    return changeInputValue;
}
// balance calculation
function updateBalance(newBalance) {
    const updatedBalance = netIncome - updatedTotalExpense;
    const totalBalance = document.getElementById(newBalance);
    const previousTotalBalance = totalBalance.innerText;
    totalBalance.innerText = updatedBalance;
    return totalBalance;
}
// update total expense, balance, saving & remaining balance
function updateAmount(fieldId, amount) {
    const totalAmount = document.getElementById(fieldId);
    const previousTotalBalance = totalAmount.innerText;
    totalAmount.innerText = amount;
    return totalAmount;
}
// calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    const netIncome = valueFromInputField('total-income');
    const foodExpense = valueFromInputField('food-expense');
    const rentExpense = valueFromInputField('rent-expense');
    const clothExpense = valueFromInputField('cloth-expense');
    const updatedTotalExpense = foodExpense + rentExpense + clothExpense;
    updateAmount('new-total-expense', updatedTotalExpense);
    const updatedBalance = netIncome - updatedTotalExpense;
    updateAmount('new-balance', updatedBalance);
});
// save button
document.getElementById('save-button').addEventListener('click', function () {
    const saveAmount = valueFromInputField('save-amount');
    const totalBalanceField = document.getElementById('new-balance');
    const totalBalanceText = totalBalanceField.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    const totalSave = totalBalance * (saveAmount / 100);
    updateAmount('total-save', totalSave);
    const balanceRemain = totalBalance - totalSave;
    updateAmount('balance-remain', balanceRemain);
});
