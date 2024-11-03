const calcKW = document.getElementById('calculate');
let kwValue = 0.3054;

calcKW.onclick = function(){
    let cashInput = Number(document.getElementById('cashInput').value);
    let Answer = document.getElementById('kwAnswer');
    let cashtoKW = cashInput * kwValue;
    Answer.innerText = 'You have ' + cashtoKW + ' kW.';
}