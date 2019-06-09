var mark = "x";


var check = function(row, col) {
    var nr = 3 * row + col + 1;
    var p = document.getElementById("id" + nr);

    if (p.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        p.innerHTML = mark;
    }
}

var tab = [
    [
        [0, 0],
        [0, 1],
        [0, 2]
    ],
    [
        [1, 0],
        [1, 1],
        [1, 2]
    ],
    [
        [2, 0],
        [2, 1],
        [2, 2]
    ],
    [
        [0, 0],
        [1, 0],
        [2, 0]
    ],
    [
        [0, 1],
        [1, 1],
        [2, 1]
    ],
    [
        [0, 2],
        [1, 2],
        [2, 2]
    ],
    [
        [0, 0],
        [1, 1],
        [2, 2]
    ],
    [
        [2, 0],
        [1, 1],
        [0, 2]
    ]
]

var cos2 = function(c) {
    var c0 = c[0];
    var c1 = c[1];
    var nr = 3 * c0 + c1 + 1;


    console.log(c0);
    console.log(c1);
    console.log(nr);
    console.log(p);


}

var cos = function(w) {
    var p0 = w[0];
    var p1 = w[1];
    var p2 = w[2];

    console.log(p0);
    console.log(p1);
    console.log(p2);

    cos2(p0);
    cos2(p1);
    cos2(p2);



}

for (i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}

cos(tab[0]);