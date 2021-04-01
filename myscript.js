// get list of all boxes
var squares = document.querySelectorAll('.box');

// to avoid counting same wins more than once.
var box_scored = [];

trackwins = false;

// to restart gameplay and clear boxes

var restart = document.querySelector("#b");

function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }

    box_scored = [];
    // document.getElementById("player" + 'X').textContent = 0;
    // document.getElementById("player" + 'O').textContent = 0;
}

restart.addEventListener('click', clearBoard);

// change box value
function markAsX() {
    if (this.textContent === '') {
        this.textContent = 'X';
        console.log('here i am');
        checkWin(this);
    }
}

function markAsO() {
    if (this.textContent === '') {
        this.textContent = 'O';
        checkWin(this);
    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', markAsX);
    squares[i].addEventListener('contextmenu', markAsO);
    console.log('checking');
}

function checkWin(thisElement) {
    console.log('checking');

    // changeMarker(thisElement);
    // get value in the most recently clicked box
    recentPlay = thisElement.textContent;

    var sameness = compareValues(recentPlay, thisElement.id, thisElement.parentElement.id);

    //console.log('here i am' + sameness);
    if (sameness === 3) {

        var score = Number(document.getElementById("player" + recentPlay).textContent);
        document.getElementById("player" + recentPlay).textContent = score += 1;
        //sessionStorage.setItem("player" + recentPlay, score);

        alert('That\'s a Win for ' + 'Player' + recentPlay + '!!!');
        console.log('That\'s a Win for ' + 'Player' + recentPlay + '!!!');
    }

    console.log(thisElement.id + ' , ' + thisElement.parentElement.id + ' , ' + recentPlay);
}


function compareValues(boxvalue, boxCol, boxRow) {

    // get list of all boxes
    var rowBoxes = document.querySelector('#' + boxRow).querySelectorAll('td');
    var colBoxes = document.querySelectorAll('#' + boxCol);

    var sameness = 0;

    //console.log(trackwins);

    // vertical check
    for (var i = 0; i < rowBoxes.length; i++) {
        if (rowBoxes[i].textContent === boxvalue && boxvalue !== '' && box_scored.includes(boxRow) === false) {
            sameness += 1;
        }
    }

    if (sameness !== 3) {
        sameness = 0;
    } else {
        box_scored.push(boxRow);
        //trackwins = true;
        console.log('win at check 1');
        return sameness;
    }

    // horizontal check
    for (var j = 0; j < colBoxes.length; j++) {
        if (colBoxes[j].textContent === boxvalue && boxvalue !== '' && box_scored.includes(boxRow) === false) {
            sameness += 1;
        }
    }

    if (sameness !== 3) {
        sameness = 0;
    } else {
        box_scored.push(boxCol);
        //trackwins = true;
        console.log('win at check 2');
        return sameness;
    }

    // diagonal checks

    for (var i = 2; i < squares.length; i += 2) {
        if (i < 7 && squares[i].textContent === boxvalue && boxvalue !== '' && box_scored.includes('diaG1') === false) {
            sameness += 1;
            console.log(sameness);
        }
    }

    if (sameness !== 3) {
        sameness = 0;
    } else {
        box_scored.push('diaG1');
        //trackwins = true;
        console.log('win at check 3');
        return sameness;
    }

    for (var i = 0; i < squares.length; i += 4) {
        if (squares[i].textContent === boxvalue && boxvalue !== '' && box_scored.includes('diaG2') === false) {
            sameness += 1;
        }
    }

    if (sameness !== 3) {
        sameness = 0;
    } else {
        box_scored.push('diaG2');
        //trackwins = true;
        console.log('win at check 4');
        return sameness;
    }

    return sameness;
}

console.log("connected");