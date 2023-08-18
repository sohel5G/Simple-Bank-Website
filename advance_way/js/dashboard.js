document.getElementById('deposit-submit-btn').addEventListener('click', function () {
    if (isNaN(getInputValueByIdAsNumber('deposit-input'))) {
        alert('Please enter a valid number');
        return
    }

    let totalDiposit = getInputValueByIdAsNumber('deposit-input') + getElementValueByIdAsNumber('current-deposit');
    setElementValueByIdAsNumber('current-deposit', totalDiposit);

    let totalBlance = getInputValueByIdAsNumber('deposit-input') + getElementValueByIdAsNumber('current-balance');
    setElementValueByIdAsNumber('current-balance', totalBlance);
    
    document.getElementById('deposit-input').value = ''; 
});

document.getElementById('withdraw-submit-btn').addEventListener('click', function () {
    if (isNaN(getInputValueByIdAsNumber('withdraw-input'))) {
        alert('Please enter a valid number');
        return
    }
    if (getInputValueByIdAsNumber('withdraw-input') > getElementValueByIdAsNumber('current-balance')) {
        alert('Please, you don\'t have enough money, deposit first');
        return
    }
    let totalWidthraw = getInputValueByIdAsNumber('withdraw-input') + getElementValueByIdAsNumber('current-withdraw');
    setElementValueByIdAsNumber('current-withdraw', totalWidthraw);

    let totalBlance = getElementValueByIdAsNumber('current-balance') - getInputValueByIdAsNumber('withdraw-input');
    setElementValueByIdAsNumber('current-balance', totalBlance);

    document.getElementById('withdraw-input').value = '';
});
