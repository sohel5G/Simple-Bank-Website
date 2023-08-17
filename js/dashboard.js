
document.getElementById('deposit-submit-btn').addEventListener('click', function(){
    let depositInput = document.getElementById('deposit-input');
    let depositInputValue = depositInput.value;
    
    if(isNaN(parseFloat(depositInputValue))){
        alert('Please enter a number');
        return
    }

    let currentDepositElement = document.getElementById('current-deposit');
    let currentDepositString = currentDepositElement.innerText;
    let currentDepositTotal = parseFloat(depositInputValue) + parseFloat(currentDepositString);
    currentDepositElement.innerText = currentDepositTotal;

    let currentBalanceElement = document.getElementById('current-balance');
    let currentBalanceString = currentBalanceElement.innerText;
    let currentBalanceTotal = parseFloat(currentBalanceString) + parseFloat(depositInputValue);
    currentBalanceElement.innerText = currentBalanceTotal;

    depositInput.value = '';
});


document.getElementById('withdraw-submit-btn').addEventListener('click', function(){
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawInputValue = parseFloat(withdrawInput.value);

    if(isNaN(withdrawInputValue)){
        alert('Please enter a number');
        return
    }

    let currentWithdrawElement = document.getElementById('current-withdraw');
    let currentWithdraw = parseFloat(currentWithdrawElement.innerText);

    let currentBalanceElement = document.getElementById('current-balance');
    let currentBalance = parseFloat(currentBalanceElement.innerText);

    if(withdrawInputValue > currentBalance){
        alert('Please, you don\'t have enough money, Deposit first');
        return
    }

    let currentWithdrawTotal = currentWithdraw + withdrawInputValue;
    currentWithdrawElement.innerText = currentWithdrawTotal;

    let currentBalanceTotal = currentBalance - withdrawInputValue;
    currentBalanceElement.innerText = currentBalanceTotal;

    withdrawInput.value = '';
});


