/* this method is used to allow the code to run properly while the JS tag is in the head tag. */
window.onload = function () {

var score = 0; 

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

}

