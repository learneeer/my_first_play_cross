var mark = "x";


var check = function(col, row) {
    var nr = 3 * col + row + 1;
    var p = document.getElementById("id" + nr);

    if (p.innerHTML === "") {
        if (mark === "x") { mark = "o" } else { mark = "x" }
        p.innerHTML = mark;
    }

    for (i = 0; i < tab.length; i++) {
        spr(tab[i]);
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


var spr = function(c) {
    var p1_y = c[0][0];
    var p1_x = c[0][1];

    var p2_y = c[1][0];
    var p2_x = c[1][1];

    var p3_y = c[2][0];
    var p3_x = c[2][1];

    var p1 = document.getElementById("id" + (3 * p1_y + p1_x + 1));
    var p2 = document.getElementById("id" + (3 * p2_y + p2_x + 1));
    var p3 = document.getElementById("id" + (3 * p3_y + p3_x + 1));



    if (p1.innerHTML !== "" && p2.innerHTML !== "" && p3.innerHTML !== "") {
        if (p1.innerHTML === p2.innerHTML && p1.innerHTML === p3.innerHTML) {
            p1.style.background = "green";
            p2.style.background = "green";
            p3.style.background = "green";
        }
    }

}