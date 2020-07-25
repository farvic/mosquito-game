var width = 0;
var height = 0;

function adjustGameScreenSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    console.log(width, height);
}

adjustGameScreenSize();

function randomMosquitoPosition() {

    // Remove the previous mosquito (if there's any...)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
    }
    //background-size 1280x1017
    var maxWidth = (width/2) + 640;
    var minWidth = (width/2) - 640;
    // var maxHeight = (height/2) + 508.5;
    // var minHeight = (height/2) - 508.5;

    var positionX = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth - 90;
    // var positionY = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight - 90;

    // var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < minWidth ? minWidth : positionX;
    positionY = positionY < 0 ? 0 : positionY;
    
    // Create the html element
    var mosquito = document.createElement('img');
    mosquito.src = 'images/mosquito.png';
    mosquito.className = randomMosquitoSize() + ' ' + randomMosquitoDirection();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    document.body.appendChild(mosquito);
}

function randomMosquitoSize() {
    var mosquitoClass = Math.floor(Math.random() * 3);

    switch(mosquitoClass) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function randomMosquitoDirection() {
    var mosquitoClass = Math.floor(Math.random() * 2);

    switch(mosquitoClass) {
        case 0:
            return 'direction_left';
        case 1:
            return 'direction_right';
    }
}
