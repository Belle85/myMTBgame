$(document).ready(function () {


    var goalPerformance = 0;
    var gamePerformance = 0;
    var wins = 0;
    var losses = 0;
    var bikeParts = {
        frame: 0,
        fork: 0,
        derailleur: 0,
    }

    function displayPerformances() {
        $("#goalPerformance").html(goalPerformance);
        $("#gamePerformance").html(gamePerformance);
        $("#wins").html(wins);
        $("#losses").html(losses);
    };

    function startGame() {
        goalPerformance = Math.floor(Math.random() * 101) + 19;
        gamePerformance = 0;
        bikeParts.frame = Math.floor(Math.random() * 12) + 1;
        bikeParts.fork = Math.floor(Math.random() * 12) + 1;
        bikeParts.derailleur = Math.floor(Math.random() * 12) + 1;
    }

    function checkGameOver() {
        if (gamePerformance === goalPerformance) {
            wins++;
            displayPerformances();
            startGame();
            displayPerformances();
        }
        else if (gamePerformance > goalPerformance) {
            console.log("This is a loss");
            alert("Too bad, you burnt out!");
            losses++;
            displayPerformances();
            startGame();
            displayPerformances();
        }
    }

    $(".bikeParts").on("click", function () {
        console.log(bikeParts.derailleur);
        var id = this.id;
        if (id === "derailleur") {
            gamePerformance += bikeParts.derailleur;
            $("#gamePerformance").html(gamePerformance);
            checkGameOver();
        }
        else if (id === "fork") {
            gamePerformance += bikeParts.fork;
            $("#gamePerformance").html(gamePerformance);
            checkGameOver();
        }
        else if (id === "frame") {
            gamePerformance += bikeParts.frame;
            $("#gamePerformance").html(gamePerformance);
            checkGameOver();
        }
        else {
            alert("ERROR");
            console.log(id + this.id)
        }

    });

});