var mark = "x";
var f1;
var f2;
var f3;
var f4;
var f5;
var f6;
var f7;
var f8;
var f9;

var change = function(x) {
    if (x.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        x.innerHTML = mark;
    }
}



var check = function(x, y) {

    var check1 = function(x, y) {
        var row = x - 1;
        var col = y - 1;
        var id = 3 * col + row + 1;

        if (id > 0 && id < 10) { f1 = document.getElementById("id" + id).innerHTML };
        else { f1 = "empty" };
    }

    var check2 = function(x, y) {
        var row = x - 1;
        var col = y;
        var id = 3 * col + row + 1;

        if (id > 0 && id < 10) { f2 = document.getElementById("id" + id).innerHTML };
        else { f2 = "empty" };
    }

    var check3 = function(x, y) {
        var row = x - 1;
        var col = y + 1;
        var id = 3 * col + row + 1;

        if (id > 0 && id < 10) { f3 = document.getElementById("id" + id).innerHTML };
        else { f3 = "empty" };
    }

    var check4 = function(x, y) {
        var row = x;
        var col = y - 1;
        var id = 3 * col + row + 1;

        if (id > 0 && id < 10) { f4 = document.getElementById("id" + id).innerHTML };
        else { f4 = "empty" };
    }

    var check5 = function(x, y) {
        var row = x;
        var col = y;
        var id = 3 * col + row + 1;

        if (id > 0 && id < 10) { f5 = document.getElementById("id" + id).innerHTML };
        else { f5 = "empty" };
    }

    var check6 = function(x, y) {
        var row = x;
        var col = y + 1;
        var id = 3 * col + row + 1;

        if (id > 0 && id < 10) { f6 = document.getElementById("id" + id).innerHTML };
        else { f6 = "empty" };
    }

    var check7 = function(x, y) {
        var row = x + 1;
        var col = y - 1;
        var id = 3 * col + row + 1;

        if (id > 0 && id < 10) { f7 = document.getElementById("id" + id).innerHTML };
        else { f7 = "empty" };
    }

    var check8 = function(x, y) {
        var row = x + 1;
        var col = y;
        var id = 3 * col + row + 1;

        if (id > 0 && id < 10) { f8 = document.getElementById("id" + id).innerHTML };
        else { f8 = "empty" };
    }

    var check9 = function(x, y) {
        var row = x + 1;
        var col = y + 1;
        var id = 3 * col + row + 1;

        if (id > 0 && id < 10) { f9 = document.getElementById("id" + id).innerHTML };
        else { f9 = "empty" };
    }

    check1(x, y);
    check2(x, y);
    check3(x, y);
    check4(x, y);
    check5(x, y);
    check6(x, y);
    check7(x, y);
    check8(x, y);
    check9(x, y);

    console.log(f1);
    console.log(f2);
    console.log(f3);
    console.log(f4);
    console.log(f5);
    console.log(f6);
    console.log(f7);
    console.log(f8);
    console.log(f9);





    var win = function(p1, p2, p3) {
        if (p1 === p2 && p1 === p3) {
            p1.style.background = "green";
            p2.style.background = "green";
            p3.style.background = "green";
        }
    }


    win(f1, f2, f3);
    win(f4, f5, f6);
    win(f7, f8, f9);
    win(f1, f4, f7);
    win(f2, f5, f8);
    win(f3, f6, f9);
    win(f1, f5, f9);
    win(f7, f5, f3);

}