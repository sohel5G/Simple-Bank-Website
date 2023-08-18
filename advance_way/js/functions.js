function getInputValueByIdAsString(id) {
    let inputValue = document.getElementById(id);
    let inputValueString = inputValue.value;
    return inputValueString;
}
function getInputValueByIdAsNumber(id) {
    let inputValue = document.getElementById(id);
    let inputValueString = inputValue.value;
    let inputValueNumber = parseFloat(inputValueString);
    // inputValue.value = '';
    return inputValueNumber;
}
function getElementValueByIdAsNumber(id) {
    let elementValue = document.getElementById(id);
    let elementValueString = elementValue.innerText;
    let elementValueNumber = parseFloat(elementValueString);
    return elementValueNumber;
}
function setElementValueByIdAsNumber(id, value) {
    let elementValue = document.getElementById(id);
    elementValue.innerText = value;

}
