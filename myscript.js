// get list of all boxes
var squares = document.querySelectorAll('td');

// to restart gameplay and clear boxes

var restart = document.querySelector("#b");

function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoard);

// change box value
function changeMarker(clickedBox) {
    if (clickedBox.textContent === '') {
        clickedBox.textContent = 'X';
    } else if (clickedBox.textContent === 'X') {
        clickedBox.textContent = 'O';
    } else {
        clickedBox.textContent = '';
    }
}

// for (var i = 0; i < squares.length; i++) {
//     squares[i].addEventListener('click', changeMarker)
//     console.log('checking');
// }

function checkWin(thisElement) {
    console.log('checking');

    changeMarker(thisElement);
    // get value in the most recently clicked box
    recentPlay = thisElement.textContent;

    var sameness = compareValues(recentPlay, thisElement.id, thisElement.parentElement.id);

    //console.log('here i am' + sameness);
    if (sameness === 3) {
        //colorGreen();
        alert('That\'s a Win!!!');
        console.log('That\'s a Win!!!');
    }

    console.log(thisElement.id + ' , ' + thisElement.parentElement.id + ' , ' + recentPlay);
}


function compareValues(boxvalue, boxCol, boxRow) {

    // get list of all boxes
    var rowBoxes = document.querySelector('#' + boxRow).querySelectorAll('td');
    var colBoxes = document.querySelectorAll('#' + boxCol);

    var sameness = 0;

    console.log(boxvalue);

    // vertical check
    for (var i = 0; i < rowBoxes.length; i++) {
        if (rowBoxes[i].textContent === boxvalue) {
            sameness += 1;
        }
    }

    if (sameness !== 3) {
        sameness = 0;
    } else {
        console.log('here i am' + sameness);
        return sameness;
    }

    // horizontal check
    for (var j = 0; j < colBoxes.length; j++) {
        if (colBoxes[j].textContent === boxvalue) {
            sameness += 1;
        }
        //console.log(colBoxes.length);
    }

    if (sameness !== 3) {
        sameness = 0;
    } else {
        console.log('here i am' + sameness);
        return sameness;
    }

    // diagonal check

    for (var i = 0; i < squares.length; i += 2) {
        if (squares[i].textContent === boxvalue) {
            sameness += 1;
        }
    }

    if (sameness !== 3) {
        sameness = 0;
    } else {
        console.log('here i am' + sameness);
        return sameness;
    }

    for (var i = 0; i < squares.length; i += 4) {
        if (squares[i].textContent === boxvalue) {
            sameness += 1;
        }
    }

    return sameness;
}

console.log("connected");