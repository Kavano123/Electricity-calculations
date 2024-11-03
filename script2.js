const calcCash = document.getElementById('cashbutton');
let cashValue = 3.27;

calcCash.onclick = function() {
    let kWInput = Number(document.getElementById('getCash').value);
    let cashAnswer = document.getElementById('cashValue');
    let kwtoCash = cashValue * kWInput;

    cashAnswer.innerText = 'You have R' + kwtoCash.toFixed(2) + ' worth of power.';
}
