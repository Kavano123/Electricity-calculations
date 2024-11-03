const calculate = document.getElementById('powerButton'); 
let kwusageParagraph = document.getElementById('powerusageP');
let kwCashparagraph = document.getElementById('powerusageCash');
var totalKW
let cashval = 3.27;
var cashtotalusage 

calculate.onclick = function(){
    let kwValue = Number(document.getElementById('powerUsage').value); 
    let time = Number(document.getElementById('time').value); 

    totalKW = kwValue * time; 
    cashtotalusage = totalKW * cashval;

    kwusageParagraph.innerText = 'You will use a total of ' +totalKW.toFixed(2) +'kW';
    kwCashparagraph.innerText = 'This means you will be spending a total of R' + cashtotalusage.toFixed(2);
}

const wattButton = document.getElementById('wattageButton'); 
var calcKW

wattButton.onclick = function(){
    let watt = Number(document.getElementById('inputWatts').value); 

    calcKW = watt/1000;
    document.getElementById('powerUsage').value = calcKW

    document.getElementById('inputWatts').value = '';

}
