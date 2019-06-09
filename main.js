var x;
var y;

var mark = "x";


var change = function(row, col) {
    var nr = 3 * col + row + 1;
    var p = document.getElementById("id" + nr);
    if (p.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        p.innerHTML = mark;
    }
}

var tab = [
    [
        [x, y],
        [x + 1, y],
        [x + 2, y]
    ],
    [
        [x - 1, y],
        [x, y],
        [x + 1, y]
    ],
    [
        [x - 2, y],
        [x - 1, y],
        [x, y]
    ],
    [
        [x, y],
        [x, y + 1],
        [x, y + 2]
    ],
    [
        [x, y - 1],
        [x, y],
        [x, y + 1]
    ],
    [
        [x, y - 2],
        [x, y - 1],
        [x, y]
    ],
    [
        [x, y],
        [x + 1, y + 1],
        [x + 2, y + 2]
    ],
    [
        [x - 1, y - 1],
        [x, y],
        [x + 1, y + 1]
    ],
    [
        [x - 2, y - 2],
        [x - 1, y - 1],
        [x, y]
    ],
    [
        [x, y],
        [x + 1, y - 1],
        [x + 2, y - 2]
    ],
    [
        [x - 1, y - 1],
        [x, y],
        [x + 1, y - 1]
    ],
    [
        [x - 2, y + 2],
        [x - 1, y + 1],
        [x, y]
    ]
]


var id = function(w) {
    var row = w[0];
    var col = w[1];
    var nr = 3 * col + row + 1;
    var f;

    if (nr > 0 && nr < 10) { f = document.getElementById("id" + nr).innerHTML } else { f = "brak" }
    return f;

}



var spr = function(c) {
    var p_0 = c[0];
    var p_1 = c[1];
    var p_2 = c[2];


    p0 = id(p_0);
    p1 = id(p_1);
    p2 = id(p_2);

    if (p0 == p1 && p0 == p2) {
        p0.style.background = 'green';
        p1.style.background = 'green';
        p2.style.background = 'green';
    }
}


var check = function(x, y) {
    change(x, y);

    for (i = 0; i < tab.length; i++) {
        spr(tab[i]);
    }
}