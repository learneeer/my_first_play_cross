var mark = "x";
var f;

var change = function(x) {
    if (x.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        x.innerHTML = mark;
    }
}



var field = function(x, y) {

    var tab1 = [];


    var id1 = 3 * y + x + 1;
    var id2 = 3 * (y - 1) + (x - 1) + 1;
    var id3 = 3 * y + (x - 1) + 1;
    var id4 = 3 * (y + 1) + (x - 1) + 1;
    var id5 = 3 * (y - 1) + x + 1;
    var id6 = 3 * (y + 1) + x + 1;
    var id7 = 3 * (y - 1) + (x + 1) + 1;
    var id8 = 3 * y + (x + 1) + 1;
    var id9 = 3 * (y + 1) + (x + 1) + 1;

    var tab = [id1, id2, id3, id4, id5, id6, id7, id8, id9];

    for (i = 0; i < 9; i++) {
        if (tab[i] > 0 && tab[i] < 10) { tab1.push(tab[i]); }

    }

    console.log(tab);
    console.log(tab1);


    for (i = 0; i < tab1.length; i++) {
        console.log(tab1[i]);
        var f = document.getElementById("id" + tab1[i]).innerHTML;
        console.log(f);

    }


}