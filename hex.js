const hexCodeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', "B", 'C', 'D', 'E', 'F'];


function colorChanger() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        var rndNum = Math.floor(Math.random() * hexCodeArray.length);
        hexColor += hexCodeArray[rndNum];
    }
    document.getElementById('code').textContent = hexColor;
    document.querySelector('.mainSection').style.background = hexColor;
}