// START THE GAME, DECLARE VARIABLES AND ASSIGN VALUES

$(document).ready(function () {

    var goalPerformance = 0;
    var gamePerformance = 0;
    var wins = 0;
    var losses = 0;
    var modifier = [2, 5, 9, 14];
    var bikeParts = {
        frame: {
            value: 0,
        },
        derailleur: {
            value: 0,
        },
        fork: {
            value: 0,
        },
    }


// FUNCTION THAT DISPLAY PERFORMANCES
function displayPerformances(){
    $("#goalPerformance").html(goalPerformance);
    $("#gamePerformance").html(gamePerformance);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

