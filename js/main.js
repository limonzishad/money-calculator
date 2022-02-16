// input field function
function valueFromInputField(inputTextId) {
    const inputText = document.getElementById(inputTextId);
    const inputValue = inputText.value;
    const changeInputValue = parseFloat(inputValue);
    inputText.value = '';
    return changeInputValue;
}
// balance calculation function
/* function updateBalance(totalIncome, totalExpense) {
    const updatedBalance = totalIncome - totalExpense;
    return updatedBalance;
} */
// calculate button
document.getElementById('calculation').addEventListener('click', function () {
    const netIncome = valueFromInputField('total-income');
    const foodExpense = valueFromInputField('food-expense');
    const rentExpense = valueFromInputField('rent-expense');
    const clothExpense = valueFromInputField('cloth-expense');
    const updatedTotalExpense = foodExpense + rentExpense + clothExpense;
    const totalExpense = document.getElementById('new-total-expense');
    const previousTotalExpense = totalExpense.innerText;
    totalExpense.innerText = updatedTotalExpense;
    const updatedBalance = netIncome - updatedTotalExpense;
    console.log(updatedBalance);
    const totalBalance = document.getElementById('new-balance');
    const previousTotalBalance = totalBalance.innerText;
    totalBalance.innerText = updatedBalance;
});
