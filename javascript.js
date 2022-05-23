/* this method is used to allow the code to run properly while the JS tag is in the head tag. */
window.onload = function () {

    var score = 0;
    var cancel = 0;
    var last_record = 0;
    /* Elements are looked up by class name: boundary to identify the walls when touching them */
    /* When touching the walls which is identified by the event listener "mouseover", the function youLose gets called. */
    var elements = document.getElementsByClassName('boundary');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", youLose);
    }

    /* This will detect the presence of cursor on the end E. */
    var element = document.getElementById('end').addEventListener("mouseover", youWon);

    /* This will return the walls into their initial color by passing through the start S. */
    var element = document.getElementById('start').addEventListener("mouseover", playAgain);

    /* This will reset the game after clicking on the start S. */
    var element = document.getElementById('start').addEventListener("click", clear);

    /* getElmenetsByClassName will return an array, so to iterate over them, a for loop is used */
    function youLose() {
        var elements = document.getElementsByClassName('boundary');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "red";
        }
        score = score - 10;
        document.getElementById('status').innerHTML = "You Lost! and Your Score is: " + score;
    }

    function playAgain() {
        var elements = document.getElementsByClassName('boundary');

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#eeeeee";
        }
    }

    function clear() {
        var elements = document.getElementsByClassName('boundary');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#eeeeee";
        }
        score = 0;
        document.getElementById('status').innerHTML = "Begin by moving your mouse over the S and Your score is: " + score;
    }

    function youWon() {
        score = score + 5;
        document.getElementById('status').innerHTML = "You Won! and Your Score is: " + score;
    }


    /* Timer Code */

    var seconds = 0;
    var el = document.getElementById('time');
    var new_record = 0;

    function incrementSeconds() {
        seconds += 1;
        last_record = seconds;


        document.getElementById('live').innerHTML = "Live: " + seconds + "s";


    }

    document.getElementById('start').addEventListener("mouseover", function () {
        cancel = setInterval(incrementSeconds, 500);
        seconds = 0;

    });

    document.getElementById('end').addEventListener("mouseover", function () {
        clearInterval(cancel);
        if (new_record === 0) { new_record = last_record; }
        else if (last_record < new_record) {
            new_record = last_record;
        }
        document.getElementById('last').innerHTML = "Last: " + last_record + "s";
        document.getElementById('best').innerHTML = "Best: " + new_record + "s";
        document.getElementById('live').innerHTML = "Live: " + "0" + "s";

    });

}

