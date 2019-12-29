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
        divs[i].style.backgroundColor = "rgb( " + r + "," + g + "," + b + ")";
        divs[i].innerHTML = number;

    }

    // document.body.style.backgroundColor = "rgb( " + r + "," + g + "," + b + ")";
});

// https://codepen.io/cphemm/full/reNwWd




