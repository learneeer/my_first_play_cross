var empty1 = document.getElementsByClassName("empty")[0];
var empty2 = document.getElementsByClassName("empty")[1];
var empty3 = document.getElementsByClassName("empty")[2];
var empty4 = document.getElementsByClassName("empty")[3];
var empty5 = document.getElementsByClassName("empty")[4];
var empty6 = document.getElementsByClassName("empty")[5];
var empty7 = document.getElementsByClassName("empty")[6];
var empty8 = document.getElementsByClassName("empty")[7];
var empty9 = document.getElementsByClassName("empty")[8];

var mark = "x";

var change = function(x) {
    if (x.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        x.innerHTML = mark;
    }
}

var check = function(x, y, z) {
    if (x.innerHTML === y.innerHTML && x.innerHTML === z.innerHTML) {
        x.style.background = "green";
        y.style.background = "green";
        z.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
}



var change1 = function() {
    change(this);
    check(empty1, empty2, empty3);
    check(empty1, empty4, empty7);
    check(empty1, empty5, empty9);
}

var change2 = function() {
    change(this);
    check(empty1, empty2, empty3);
    check(empty2, empty5, empty8);
}

var change3 = function() {
    change(this);
    check(empty1, empty2, empty3);
    check(empty3, empty5, empty7);
    check(empty3, empty6, empty9);
}

var change4 = function() {
    change(this);
    check(empty4, empty5, empty6);
    check(empty1, empty4, empty7);
}

var change5 = function() {
    change(this);
    check(empty2, empty5, empty8);
    check(empty4, empty5, empty6);
    check(empty7, empty5, empty3);
    check(empty1, empty5, empty9);
}

var change6 = function() {
    change(this);
    check(empty3, empty6, empty9);
    check(empty4, empty5, empty6);
}

var change7 = function() {
    change(this);
    check(empty1, empty4, empty7);
    check(empty7, empty8, empty9);
    check(empty7, empty5, empty3);
}

var change8 = function() {
    change(this);
    check(empty7, empty8, empty9);
    check(empty2, empty5, empty8);
}

var change9 = function() {
    change(this);
    check(empty3, empty6, empty9);
    check(empty7, empty8, empty9);
    check(empty1, empty5, empty9);
}

empty1.addEventListener("click", change1);
empty2.addEventListener("click", change2);
empty3.addEventListener("click", change3);
empty4.addEventListener("click", change4);
empty5.addEventListener("click", change5);
empty6.addEventListener("click", change6);
empty7.addEventListener("click", change7);
empty8.addEventListener("click", change8);
empty9.addEventListener("click", change9);