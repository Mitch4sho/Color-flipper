const hexCodeArray = ['#BEE6CE', '#BCFFDB', '#8DFFCD', '#68D89B', '#4F9D69'];


function colorChanger() {
    var rndNum = Math.floor(Math.random() * hexCodeArray.length);
    document.getElementById('code').textContent = hexCodeArray[rndNum];
    document.querySelector('.mainSection').style.background = hexCodeArray[rndNum];
}