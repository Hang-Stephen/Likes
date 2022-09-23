var x = 9;
var y = 12;
var z = 9;
var countElement = document.querySelector("#count");
var countY = document.querySelector("#count2");
var countZ = document.querySelector("#count3");

function add(element) {
    x++;
    countElement.innerText = x + " like(s)";
}

function addMe(element) {
    y++;
    countY.innerText = y + " like(s)";
}

function addThis(element) {
    z++;
    countZ.innerText = z + " like(s)";
}