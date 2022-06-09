//epic and not so epic yathzee script made by me legovechter. Very cool. I loved the array ;)

const dices = [];
var numberHolds = [];
var numberRemembers = [];
var playerScores = [];
var playerScoreLock = [];

//#region html begin value
document.getElementById("onesPlayer").innerHTML = "";
document.getElementById("twosPlayer").innerHTML = "";
document.getElementById("threesPlayer").innerHTML = "";
document.getElementById("foursPlayer").innerHTML = "";
document.getElementById("fivesPlayer").innerHTML = "";
document.getElementById("sixesPlayer").innerHTML = "";
document.getElementById("threeofkindPlayer").innerHTML = "";
document.getElementById("fourofkindPlayer").innerHTML = "";
document.getElementById("fullhousePlayer").innerHTML = "";
document.getElementById("smallPlayer").innerHTML = "";
document.getElementById("bigPlayer").innerHTML = "";
document.getElementById("chancePlayer").innerHTML = "";
document.getElementById("yahtzeePlayer").innerHTML = "";
//#endregion
//#region playerOption begin value
var playerOption1 = false;
var playerOption2 = false;
var playerOption3 = false;
var playerOption4 = false;
var playerOption5 = false;
var playerOption6 = false;
var playerOption7 = false;
var playerOption8 = false;
var playerOption9 = false;
var playerOption10 = false;
var playerOption11 = false;
var playerOption12 = false;
var playerOption13 = false;
//#endregion
//#region playerScores[] begin value
playerScores[0] = 0;
playerScores[1] = 0;
playerScores[2] = 0;
playerScores[3] = 0;
playerScores[4] = 0;
playerScores[5] = 0;
playerScores[6] = 0;
playerScores[7] = 0;
playerScores[8] = 0;
playerScores[9] = 0;
playerScores[10] = 0;
playerScores[11] = 0;
playerScores[12] = 0;
//#endregion

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


var diceRolls = 3;
var yahtzeeCount = 0;
var playerSum;

var gameStart = false;

var freeze = false;
var freeze1 = false;
var freeze2 = false;
var freeze3 = false;
var freeze4 = false;



var isPlayer1 = true;
var canEndTurn = false;


//function for giving dice value
function rollDice() {
    gameStart = true;

    if (diceRolls > 0) {
        if (freeze == false) {
            //generates random number
            var randomNumber = Math.floor(Math.random() * 6) + 1;
            numberHolds[0] = randomNumber;
            document.getElementById("value").innerHTML = randomNumber;
        }
        if (freeze1 == false) {
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            numberHolds[1] = randomNumber1;
            document.getElementById("value1").innerHTML = randomNumber1;
        }
        if (freeze2 == false) {
            var randomNumber2 = Math.floor(Math.random() * 6) + 1;
            numberHolds[2] = randomNumber2;
            document.getElementById("value2").innerHTML = randomNumber2;
        }
        if (freeze3 == false) {
            var randomNumber3 = Math.floor(Math.random() * 6) + 1;
            numberHolds[3] = randomNumber3;
            document.getElementById("value3").innerHTML = randomNumber3;
        }
        if (freeze4 == false) {
            var randomNumber4 = Math.floor(Math.random() * 6) + 1;
            numberHolds[4] = randomNumber4;
            document.getElementById("value4").innerHTML = randomNumber4;
        }

    }


    makeScore();
    updateScore();

    diceRolls -= 1;
    document.getElementById("diceRolls").innerHTML = "Dicerolls left:" + diceRolls;
}


//event triggers when one of the top button row is pressed
function diceEvent(clicked_id) {
    //disables the button on click
    if (gameStart) {

        document.getElementById(clicked_id).disabled = true;


        if (clicked_id == 1) {
            freeze = true;
            //sets the number on the bottom button row
            numberRemembers[0] = numberHolds[0];
            document.getElementById("numbHold").innerHTML = numberRemembers[0];

        }

        if (clicked_id == 2) {
            freeze1 = true;
            numberRemembers[1] = numberHolds[1];
            document.getElementById("numb2Hold").innerHTML = numberRemembers[1];
        }

        if (clicked_id == 3) {
            freeze2 = true;
            numberRemembers[2] = numberHolds[2];
            document.getElementById("numb3Hold").innerHTML = numberRemembers[2];
        }

        if (clicked_id == 4) {
            numberRemembers[3] = numberHolds[3];
            freeze3 = true;
            document.getElementById("numb4Hold").innerHTML = numberRemembers[3];
        }
        if (clicked_id == 5) {
            numberRemembers[4] = numberHolds[4];
            freeze4 = true;
            document.getElementById("numb5Hold").innerHTML = numberRemembers[4];
        }
    }
}


//event triggers when one of the bottom buttons is pressed
function diceEvent2(clicked_id) {


    if (clicked_id == 6) {
        freeze = false;
        //cleans the bottom button
        document.getElementById("numbHold").innerHTML = "";
        //enables the button up top
        document.getElementById(1).disabled = false;
    }
    if (clicked_id == 7) {
        freeze1 = false;
        document.getElementById("numb2Hold").innerHTML = "";
        document.getElementById(2).disabled = false;
    }
    if (clicked_id == 8) {
        freeze2 = false;
        document.getElementById("numb3Hold").innerHTML = "";
        document.getElementById(3).disabled = false;
    }
    if (clicked_id == 9) {
        freeze3 = false;
        document.getElementById("numb4Hold").innerHTML = "";
        document.getElementById(4).disabled = false;
    }
    if (clicked_id == 10) {
        freeze4 = false;
        document.getElementById("numb5Hold").innerHTML = "";
        document.getElementById(5).disabled = false;
    }

}

//event triggers when one of the player score options is pressed
function choicePlayerEvent(clicked_id) {
    if (isPlayer1) {
        document.getElementById(clicked_id).disabled = true;


        switch (clicked_id) {
            case "P1":
                playerOption1 = true;
                break;
            case "P2":
                playerOption2 = true;
                break;
            case "P3":
                playerOption3 = true;
                break;
            case "P4":
                playerOption4 = true;
                break;
            case "P5":
                playerOption5 = true;
                break;
            case "P6":
                playerOption6 = true;
                break;
            case "P3K":
                playerOption7 = true;
                break;
            case "P4K":
                playerOption8 = true;
                break;
            case "PFH":
                playerOption9 = true;
                break;
            case "PSS":
                playerOption10 = true;
                break;
            case "PBS":
                playerOption11 = true;
                break;
            case "PC":
                playerOption12 = true;
                break;
            case "PY":
                playerOption13 = true;
                break;
        }


        endTurn();
    }

}

//resets the table
function resetTable() {


    modal.style.display = "none";


    diceRolls = 3;
    yahtzeeCount = 0;

    playerScores[0] = 0;
    playerScores[1] = 0;
    playerScores[2] = 0;
    playerScores[3] = 0;
    playerScores[4] = 0;
    playerScores[5] = 0;
    playerScores[6] = 0;
    playerScores[7] = 0;
    playerScores[8] = 0;
    playerScores[9] = 0;
    playerScores[10] = 0;
    playerScores[11] = 0;
    playerScores[12] = 0;


    var dices = document.getElementsByClassName('dices');
    for (var i = 0; i < dices.length; i++) {
        dices[i].disabled = false;
    }
    //#region reset dice and dice holding
    document.getElementById("value").innerHTML = null;
    document.getElementById("value1").innerHTML = null;
    document.getElementById("value2").innerHTML = null;
    document.getElementById("value3").innerHTML = null;
    document.getElementById("value4").innerHTML = null;
    document.getElementById("numbHold").innerHTML = null;
    document.getElementById("numb2Hold").innerHTML = null;
    document.getElementById("numb3Hold").innerHTML = null;
    document.getElementById("numb4Hold").innerHTML = null;
    document.getElementById("numb5Hold").innerHTML = null;
    //#endregion


    freeze = false;
    freeze1 = false;
    freeze2 = false;
    freeze3 = false;
    freeze4 = false;
    //#region reset score html
    document.getElementById("onesPlayer").innerHTML = "";
    document.getElementById("twosPlayer").innerHTML = "";
    document.getElementById("threesPlayer").innerHTML = "";
    document.getElementById("foursPlayer").innerHTML = "";
    document.getElementById("fivesPlayer").innerHTML = "";
    document.getElementById("sixesPlayer").innerHTML = "";
    document.getElementById("threeofkindPlayer").innerHTML = "";
    document.getElementById("fourofkindPlayer").innerHTML = "";
    document.getElementById("fullhousePlayer").innerHTML = "";
    document.getElementById("smallPlayer").innerHTML = "";
    document.getElementById("bigPlayer").innerHTML = "";
    document.getElementById("chancePlayer").innerHTML = "";
    document.getElementById("yahtzeePlayer").innerHTML = "";
    document.getElementById("sumPlayer").innerHTML = "";

    document.getElementById("P1").disabled = false;
    document.getElementById("P2").disabled = false;
    document.getElementById("P3").disabled = false;
    document.getElementById("P4").disabled = false;
    document.getElementById("P6").disabled = false;
    document.getElementById("P3K").disabled = false;
    document.getElementById("P4K").disabled = false;
    document.getElementById("PFH").disabled = false;
    document.getElementById("PSS").disabled = false;
    document.getElementById("PBS").disabled = false;
    document.getElementById("PC").disabled = false;
    document.getElementById("PY").disabled = false;

    document.getElementById("totalPlayer").innerHTML = "";
    //#endregion
}

//event triggers when the button is pressed meant for ending your turn
function endTurn() {
    diceRolls = 3;
    document.getElementById("diceRolls").innerHTML = "Dicerolls left:" + diceRolls;



    var dices = document.getElementsByClassName('dices');
    for (var i = 0; i < dices.length; i++) {
        dices[i].disabled = false;
    }

    //#region reset dice and dice holding
    document.getElementById("value").innerHTML = null;
    document.getElementById("value1").innerHTML = null;
    document.getElementById("value2").innerHTML = null;
    document.getElementById("value3").innerHTML = null;
    document.getElementById("value4").innerHTML = null;
    document.getElementById("numbHold").innerHTML = null;
    document.getElementById("numb2Hold").innerHTML = null;
    document.getElementById("numb3Hold").innerHTML = null;
    document.getElementById("numb4Hold").innerHTML = null;
    document.getElementById("numb5Hold").innerHTML = null;
    //#endregion

    freeze = false;
    freeze1 = false;
    freeze2 = false;
    freeze3 = false;
    freeze4 = false;


    //#region reset scoreboard based on if the player has already locked a score
    //if player locked a score then that value will not be reset
    if (!playerOption1) {

        document.getElementById("onesPlayer").innerHTML = "";
        playerScores[0] = 0;
    }
    if (!playerOption2) {

        document.getElementById("twosPlayer").innerHTML = "";
        playerScores[1] = 0;
    }
    if (!playerOption3) {

        document.getElementById("threesPlayer").innerHTML = "";
        playerScores[2] = 0;
    }
    if (!playerOption4) {

        document.getElementById("foursPlayer").innerHTML = "";
        playerScores[3] = 0;
    }
    if (!playerOption5) {

        document.getElementById("fivesPlayer").innerHTML = "";
        playerScores[4] = 0;
    }
    if (!playerOption6) {

        document.getElementById("sixesPlayer").innerHTML = "";
        playerScores[5] = 0;
    }


    if (!playerOption7) {

        document.getElementById("threeofkindPlayer").innerHTML = "";
        playerScores[6] = 0;
    }
    if (!playerOption8) {

        document.getElementById("fourofkindPlayer").innerHTML = "";
        playerScores[7] = 0;
    }
    if (!playerOption9) {

        document.getElementById("fullhousePlayer").innerHTML = "";
        playerScores[8] = 0;
    }
    if (!playerOption10) {

        document.getElementById("smallPlayer").innerHTML = "";
        playerScores[9] = 0;
    }
    if (!playerOption11) {

        document.getElementById("bigPlayer").innerHTML = "";
        playerScores[10] = 0;
    }
    if (!playerOption12) {

        document.getElementById("chancePlayer").innerHTML = "";
        playerScores[11] = 0;
    }
    if (!playerOption13) {

        document.getElementById("yahtzeePlayer").innerHTML = "";
        playerScores[12] = 0;
    }
    //#endregion


    checkOptionsLeft();
}

//puts the score on the score board
function updateScore() {

    document.getElementById("onesPlayer").innerHTML = playerScoreLock[0];
    document.getElementById("twosPlayer").innerHTML = playerScoreLock[1];
    document.getElementById("threesPlayer").innerHTML = playerScoreLock[2];
    document.getElementById("foursPlayer").innerHTML = playerScoreLock[3];
    document.getElementById("fivesPlayer").innerHTML = playerScoreLock[4];
    document.getElementById("sixesPlayer").innerHTML = playerScoreLock[5];

}

//triggers the right function to determine the score.
function makeScore() {

    let pair = false;
    let threeofkind = false;
    let fourofkind = false;
    let fullhouse = false;
    let yahtzee = false;
    let small = false;
    let big = false;
    let chance = true;

    //looks at the number of each number (uses the unsorted array)
    const oneCount = numberHolds.filter(checkOnes);
    const twoCount = numberHolds.filter(checkTwos);
    const threeCount = numberHolds.filter(checkThrees);
    const fourCount = numberHolds.filter(checkFours);
    const fiveCount = numberHolds.filter(checkFives);
    const sixCount = numberHolds.filter(checkSixes);

    //calculates the score of the numberoptions (uses the unsorted array)
    playerScores[0] = oneCount.length * 1;
    playerScores[1] = twoCount.length * 2;
    playerScores[2] = threeCount.length * 3;
    playerScores[3] = fourCount.length * 4;
    playerScores[4] = fiveCount.length * 5;
    playerScores[5] = sixCount.length * 6;


    //checks the score for three of a kind, four of a kind, fullhouse and yahtzee
    //#region yahtzee, four of kind, three of kind, fullhouse check
    if (oneCount.length == 2 || twoCount.length == 2 || threeCount.length == 2 || fourCount.length == 2 || fiveCount.length == 2 || sixCount.length == 2) {
        pair = true;
    } else {
        pair = false;
    }

    if (oneCount.length == 3 || twoCount.length == 3 || threeCount.length == 3 || fourCount.length == 3 || fiveCount.length == 3 || sixCount.length == 3) {
        threeofkind = true;
        //console.log("i hate you 3 times more");
    } else {
        threeofkind = false;
    }

    if (oneCount.length == 4 || twoCount.length == 4 || threeCount.length == 4 || fourCount.length == 4 || fiveCount.length == 4 || sixCount.length == 4) {
        fourofkind = true;
        //console.log("wow four of a fucking kind");
    } else {
        fourofkind = false;
    }
    if (oneCount.length == 5 || twoCount.length == 5 || threeCount.length == 5 || fourCount.length == 5 || fiveCount.length == 5 || sixCount.length == 5) {
        yahtzee = true;
        yahtzeeCount = +1;
        //console.log("honestly to god i wish it works");
    } else {
        yahtzee = false;
    }

    let bonus
    if (yahtzee && yahtzeeCount >= 0) {
        bonus = true;
        //console.log("omg how lucky are you. Why did you play this game. You should have bought a lotery ticket.")
    }

    if (pair && threeofkind) {
        fullhouse = true;
        //console.log("full bullshit");
    } else {
        fullhouse = false;
    }
    //#endregion


    //checks if it is big or small straight

    let counter = lengthStraight(nonMutatingSort(numberHolds));

    if (counter === 4) {
        big = true;
        //console.log("it is so big tho");
    } else {
        big = false;
    }

    if (counter >= 3) {
        small = true;
        //console.log("not all can be big");
    } else {
        small = false;
    }


    //#region playeroptions
    if (playerOption1 == false) {
        playerScoreLock[0] = playerScores[0];
    }
    if (playerOption2 == false) {
        playerScoreLock[1] = playerScores[1];
    }
    if (playerOption3 == false) {
        playerScoreLock[2] = playerScores[2];
    }
    if (playerOption4 == false) {
        playerScoreLock[3] = playerScores[3];
    }
    if (playerOption5 == false) {
        playerScoreLock[4] = playerScores[4];
    }
    if (playerOption6 == false) {
        playerScoreLock[5] = playerScores[5];
    }
    if (playerOption7 == false) {
        playerScoreLock[6] = playerScores[6];
    }
    if (playerOption8 == false) {
        playerScoreLock[7] = playerScores[7];
    }
    if (playerOption9 == false) {
        playerScoreLock[8] = playerScores[8];
    }
    if (playerOption10 == false) {
        playerScoreLock[9] = playerScores[9];
    }
    if (playerOption11 == false) {
        playerScoreLock[10] = playerScores[10];
    }
    if (playerOption12 == false) {
        playerScoreLock[11] = playerScores[11];
    }
    if (playerOption13 == false) {
        playerScoreLock[12] = playerScores[12];
    }
    //#endregion

    document.getElementById("sumPlayer").innerHTML = playerScoreLock[0] + playerScoreLock[1] + playerScoreLock[2] + playerScoreLock[3] + playerScoreLock[4] + playerScoreLock[5];
    let sumScore = playerScoreLock[0] + playerScoreLock[1] + playerScoreLock[2] + playerScoreLock[3] + playerScoreLock[4] + playerScoreLock[5];


    //#region values to screen
    if (threeofkind) {
        document.getElementById("threeofkindPlayer").innerHTML = (playerScores[0] + playerScores[1] + playerScores[2] + playerScores[3] + playerScores[4] + playerScores[5]);
        playerScores[6] = playerScores[0] + playerScores[1] + playerScores[2] + playerScores[3] + playerScores[4] + playerScores[5];
    }

    if (fourofkind) {
        document.getElementById("fourofkindPlayer").innerHTML = (playerScores[0] + playerScores[1] + playerScores[2] + playerScores[3] + playerScores[4] + playerScores[5]);
        playerScores[7] = playerScores[0] + playerScores[1] + playerScores[2] + playerScores[3] + playerScores[4] + playerScores[5];
    }

    if (fullhouse) {
        document.getElementById("fullhousePlayer").innerHTML = 25;
        playerScores[8] = 25;
    }

    if (small) {
        document.getElementById("smallPlayer").innerHTML = 30;
        playerScores[9] = 30;
    }

    if (big) {
        document.getElementById("bigPlayer").innerHTML = 40;
        playerScores[10] = 40
    }

    if (chance) {
        document.getElementById("chancePlayer").innerHTML = (playerScores[0] + playerScores[1] + playerScores[2] + playerScores[3] + playerScores[4] + playerScores[5]);
        playerScores[11] = playerScores[0] + playerScores[1] + playerScores[2] + playerScores[3] + playerScores[4] + playerScores[5];
    }

    if (yahtzee) {
        document.getElementById("yahtzeePlayer").innerHTML = 50;
        playerScores[12] = 50;
    }
    let bonusScore;
    if (bonus) {
        document.getElementById("bonusPlayer").innerHTML = bonusScore;
        bonusScore = 100 * (yahtzeeCount - 1)
    } else {
        bonusScore = 0;
    }

    if (yahtzee && yahtzeeCount >= 1) {
        fullhouse = true;
        small = true;
        big = true;
    }

    let totalScore = sumScore + playerScores[6] + playerScores[7] + playerScores[8] + playerScores[9] + playerScores[10] + playerScores[11] + playerScores[12] + bonusScore;


    document.getElementById("threeofkindPlayer").innerHTML = playerScores[6];
    document.getElementById("fourofkindPlayer").innerHTML = playerScores[7];
    document.getElementById("fullhousePlayer").innerHTML = playerScores[8];
    document.getElementById("smallPlayer").innerHTML = playerScores[9];
    document.getElementById("bigPlayer").innerHTML = playerScores[10];
    document.getElementById("chancePlayer").innerHTML = playerScores[11];
    document.getElementById("yahtzeePlayer").innerHTML = playerScores[12];
    document.getElementById("totalPlayer").innerHTML = totalScore;
    document.getElementById("bonusPlayer").innerHTML = bonusScore;

    //console.log((sumScore + playerScores[6] + playerScores[7] + playerScores[8] + playerScores[9] + playerScores[10] + playerScores[11] + playerScores[12] + bonusScore));

}

//#endregion


//#region functions: checkOnes, checkTwos, checkThrees, checkFours, checkFives, checkSixes
//checks if there is a variant of the asked variable 1-6
function checkOnes(numberHolds) {
    return numberHolds == 1;
}

function checkTwos(numberHolds) {
    return numberHolds == 2;
}

function checkThrees(numberHolds) {
    return numberHolds == 3;
}

function checkFours(numberHolds) {
    return numberHolds == 4;
}

function checkFives(numberHolds) {
    return numberHolds == 5;
}

function checkSixes(numberHolds) {
    return numberHolds == 6;
}
//#endregion


//makes a copy of the array and uses this array to make a ordered array
function nonMutatingSort(arr) {
    let copy = [...arr];
    copy.sort((a, b) => {
        return a - b;
    })
    return copy;
}

//checks the length of the array
function lengthStraight(arr) {
    let length = 0;

    for (var i = 0; i < numberHolds.length; i++) {
        if (arr[i + 1] - arr[i] === 1) {
            length += 1;
        }
    }
    return length;
}

//checks the number of options left if all options are used trigger end game 
function checkOptionsLeft() {
    let option = 0;
    let scores = document.getElementsByClassName('score');
    for (var i = 0; i < scores.length; i++) {
        if (scores[i].disabled == true) {
            option++;
        }
    }

    if (option == 13) {
        modal.style.display = "block";
        gameStart = false;
    }
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
}

//#region notes
/*
order array
check every number
check length of same numbers
if length is 3 = threeofkind
if length is 4 = fourofkind
if length is 5 = yahtzee


fuck this guy -> numberHolds.sort();
this is the better guy -> nonMutatingSort(numberHolds);

perhaps?
nonMutatingSort(numberHolds)[i] && nonMutatingSort(numberHolds)[i + 1];

maybye player 2?

oh god pls no

to-do:
//done
* random number generator
//done
* basic score
    - ones
    - twos
    - threes
    - fours
    - fives
    - sixes
//done
* complex score
    - three of kind
    - four of kind
    - fullhouse
    - small straight
    - big straight
    - chance
    - yahtzee
    - yahtzee++

//done
*	pop-up when game ends so if you pick all the options
	- reset button
	- shows total score
	- tells if you are trash or not

//done
*	some titles above certain elements
	- dice holding
	- big title of the game	
*/

//#endregion