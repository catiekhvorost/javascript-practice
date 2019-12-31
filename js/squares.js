//create function to change the background color to random colors when you click button

//with plain variables
var button = document.getElementById("btn");
var divs = document.querySelectorAll(".square");

button.addEventListener("click", function(){
    for ( var i = 0; i < divs.length; i++) {
        var number = i;
        number += 1;
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        //using template literals instead to make rgb more readable than code below.
        // divs[i].style.backgroundColor = "rgb( " + r + "," + g + "," + b + ")";
        divs[i].style.backgroundColor =  `rgb( ${r},${g},${b})`;
        divs[i].innerHTML = number;
    }
});

//Make function where the div colors will change on their own every 2 seconds. Event listener added to stop button in index.html

//you have to put the setInterval function within a variable. This counts as a numeric, non zero ID that identifies the timer being created. You then pass the ID into the clearInterval function as shown below to stop the interval from occuring.
var intervalID = setInterval(makeColors, 2000);

function makeColors() {
    for ( var i = 0; i < divs.length; i++) {
        var number = i;
        number += 1;
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        divs[i].style.backgroundColor = `rgb( ${r},${g},${b})`;
        divs[i].innerHTML = number;

    }
}

//stop color change

function stopTextColor() {
    clearInterval(intervalID);
  }

// https://codepen.io/cphemm/full/reNwWd




