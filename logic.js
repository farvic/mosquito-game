var width = 0;
var height = 0;
var lives = 3;
var time = 60;
var score = 0;

var mosquitoLife = 1500;

var level = window.location.search;
level = level.replace('?','');

// document.getElementById('final-score').innerHTML = finalScore;

if(level==='easy') {
    mosquitoLife = 1500;
}
if(level==='hard') {
    mosquitoLife = 750;
}
else if(level==='omg') mosquitoLife = 500;

// var score = document.getElementById('score');

function adjustGameScreenSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    console.log(width, height);
}

var chronometer = setInterval(function(){
    time--;
    if (time < 0) {
        clearInterval(chronometer);
        clearInterval(createMosquito);
        window.location.href="victory.html?"+score;
    } else document.getElementById('chronometer').innerHTML = time;
},mosquitoLife);

adjustGameScreenSize();


function randomMosquitoPosition() {
    // Remove the previous mosquito (if there's any...)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if(lives > 0) {
            document.getElementById('life'+lives).src="images/empty_heart.png";
            lives--;
        } else{
            window.location.href="game_over.html?"+score;
        };
        if(lives == 0) window.location.href="game_over.html?"+score;
    }
    //background-size 1280x1017
    //! Needs to add mobile resposiveness
    var maxWidth = (width/2) + 640;
    var minWidth = (width/2) - 640;
    // var maxHeight = (height/2) + 508.5;
    // var minHeight = (height/2) - 508.5;
    var positionX = 0;
    if (width >= 1024) {
        positionX = (Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth - 90);
    } else {
        positionX = Math.floor(Math.random() * width) - 90;
        minWidth = 0;
    }

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
    mosquito.onclick = function () {
        this.remove();
        score++;
        document.getElementById('current-score').innerHTML = score;
    }

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
