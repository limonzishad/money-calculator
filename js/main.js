// value from input field
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
// error massage function
function errorMassage(wrongInput) {
    const errorMassage = document.getElementById(wrongInput);
    const previousErrorMassage = errorMassage.innerText;
    errorMassage.innerText = 'wrong input';
    return errorMassage;
}
// error massage function 2
function errorMassage2(errorMassageField) {
    const errorMassage2 = document.getElementById(errorMassageField);
    const previousErrorMassage = errorMassage2.innerText;
    errorMassage2.innerText = "can't expense/save more than income";
    return errorMassage2;
}
//clear error massage
function clearErrorMassage(clearInput) {
    const clearMassage = document.getElementById(clearInput);
    const previousErrorMassage = clearMassage.innerText;
    clearMassage.innerText = '';
    return clearMassage;
}
// calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    const netIncome = valueFromInputField('total-income');
    const foodExpense = valueFromInputField('food-expense');
    const rentExpense = valueFromInputField('rent-expense');
    const clothExpense = valueFromInputField('cloth-expense');
    // check input
    if (netIncome < 0) {
        errorMassage('wrong-income-input');
    }
    else {
        clearErrorMassage('wrong-income-input');
    }
    if (foodExpense < 0) {
        errorMassage('wrong-food-input');
    }
    else {
        clearErrorMassage('wrong-food-input');
    }
    if (rentExpense < 0) {
        errorMassage('wrong-rent-input');
    }
    else {
        clearErrorMassage('wrong-rent-input');
    }
    if (clothExpense < 0) {
        errorMassage('wrong-cloth-input');
    }
    else {
        clearErrorMassage('wrong-cloth-input');
    }
    const updatedTotalExpense = foodExpense + rentExpense + clothExpense;
    if (netIncome >= updatedTotalExpense || updatedTotalExpense == 0) {
        updateAmount('new-total-expense', updatedTotalExpense);
        const updatedBalance = netIncome - updatedTotalExpense;
        updateAmount('new-balance', updatedBalance);
        clearErrorMassage('expense-error-massage');
    }
    else {
        errorMassage2('expense-error-massage');
    }
});
// save button
document.getElementById('save-button').addEventListener('click', function () {
    const saveAmount = valueFromInputField('save-amount');
    const totalBalanceField = document.getElementById('new-balance');
    const totalBalanceText = totalBalanceField.innerText;
    const totalBalance = parseFloat(totalBalanceText);
    if (saveAmount < 0) {
        errorMassage('wrong-saving-input');
    }
    else {
        clearErrorMassage('wrong-saving-input');
        const totalSave = totalBalance * (saveAmount / 100);
        if (totalBalance >= totalSave) {
            const balanceRemain = totalBalance - totalSave;
            updateAmount('total-save', totalSave);
            updateAmount('balance-remain', balanceRemain);
            clearErrorMassage('save-error-massage');
        }
        else {
            errorMassage2('save-error-massage');
        }
    }
});