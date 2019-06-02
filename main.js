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



var change1 = function() {
    if (this.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        this.innerHTML = mark;
    }

    if (empty1.innerHTML === empty3.innerHTML && empty1.innerHTML === empty3.innerHTML) {
        empty1.style.background = "green";
        empty2.style.background = "green";
        empty3.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty1.innerHTML === empty4.innerHTML && empty1.innerHTML === empty7.innerHTML) {
        empty1.style.background = "green";
        empty4.style.background = "green";
        empty7.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty1.innerHTML === empty5.innerHTML && empty1.innerHTML === empty9.innerHTML) {
        empty1.style.background = "green";
        empty5.style.background = "green";
        empty9.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
}

var change2 = function() {
    if (this.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        this.innerHTML = mark;
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }

    if (empty2.innerHTML === empty1.innerHTML && empty2.innerHTML === empty3.innerHTML) {
        empty2.style.background = "green";
        empty1.style.background = "green";
        empty3.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty2.innerHTML === empty5.innerHTML && empty2.innerHTML === empty8.innerHTML) {
        empty2.style.background = "green";
        empty5.style.background = "green";
        empty8.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
}

var change3 = function() {
    if (this.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        this.innerHTML = mark;
    }

    if (empty3.innerHTML === empty1.innerHTML && empty3.innerHTML === empty2.innerHTML) {
        empty3.style.background = "green";
        empty1.style.background = "green";
        empty2.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty3.innerHTML === empty6.innerHTML && empty3.innerHTML === empty9.innerHTML) {
        empty3.style.background = "green";
        empty6.style.background = "green";
        empty9.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty3.innerHTML === empty5.innerHTML && empty3.innerHTML === empty7.innerHTML) {
        empty3.style.background = "green";
        empty5.style.background = "green";
        empty7.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
}

var change4 = function() {
    if (this.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        this.innerHTML = mark;
    }

    if (empty4.innerHTML === empty1.innerHTML && empty4.innerHTML === empty7.innerHTML) {
        empty4.style.background = "green";
        empty1.style.background = "green";
        empty7.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty4.innerHTML === empty5.innerHTML && empty4.innerHTML === empty6.innerHTML) {
        empty4.style.background = "green";
        empty5.style.background = "green";
        empty6.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
}

var change5 = function() {
    if (this.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        this.innerHTML = mark;
    }

    if (empty5.innerHTML === empty1.innerHTML && empty5.innerHTML === empty9.innerHTML) {
        empty5.style.background = "green";
        empty1.style.background = "green";
        empty9.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty5.innerHTML === empty2.innerHTML && empty5.innerHTML === empty8.innerHTML) {
        empty5.style.background = "green";
        empty2.style.background = "green";
        empty8.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty5.innerHTML === empty3.innerHTML && empty5.innerHTML === empty7.innerHTML) {
        empty5.style.background = "green";
        empty3.style.background = "green";
        empty7.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty5.innerHTML === empty4.innerHTML && empty5.innerHTML === empty6.innerHTML) {
        empty5.style.background = "green";
        empty4.style.background = "green";
        empty6.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
}

var change6 = function() {
    if (this.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        this.innerHTML = mark;
    }

    if (empty6.innerHTML === empty3.innerHTML && empty6.innerHTML === empty9.innerHTML) {
        empty6.style.background = "green";
        empty3.style.background = "green";
        empty9.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty6.innerHTML === empty5.innerHTML && empty6.innerHTML === empty4.innerHTML) {
        empty6.style.background = "green";
        empty4.style.background = "green";
        empty5.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
}

var change7 = function() {
    if (this.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        this.innerHTML = mark;
    }

    if (empty7.innerHTML === empty1.innerHTML && empty7.innerHTML === empty4.innerHTML) {
        empty7.style.background = "green";
        empty1.style.background = "green";
        empty4.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty7.innerHTML === empty8.innerHTML && empty7.innerHTML === empty9.innerHTML) {
        empty7.style.background = "green";
        empty8.style.background = "green";
        empty9.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty7.innerHTML === empty5.innerHTML && empty7.innerHTML === empty3.innerHTML) {
        empty7.style.background = "green";
        empty3.style.background = "green";
        empty5.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
}

var change8 = function() {
    if (this.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        this.innerHTML = mark;
    }

    if (empty8.innerHTML === empty2.innerHTML && empty8.innerHTML === empty5.innerHTML) {
        empty8.style.background = "green";
        empty2.style.background = "green";
        empty5.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty8.innerHTML === empty7.innerHTML && empty8.innerHTML === empty9.innerHTML) {
        empty8.style.background = "green";
        empty7.style.background = "green";
        empty9.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
}

var change9 = function() {
    if (this.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        this.innerHTML = mark;
    }

    if (empty9.innerHTML === empty7.innerHTML && empty9.innerHTML === empty8.innerHTML) {
        empty9.style.background = "green";
        empty7.style.background = "green";
        empty8.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty9.innerHTML === empty6.innerHTML && empty9.innerHTML === empty3.innerHTML) {
        empty9.style.background = "green";
        empty3.style.background = "green";
        empty6.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
    if (empty9.innerHTML === empty5.innerHTML && empty9.innerHTML === empty1.innerHTML) {
        empty9.style.background = "green";
        empty1.style.background = "green";
        empty5.style.background = "green";
        setTimeout((function() {
            window.location.reload();
        }), 2000);
    }
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