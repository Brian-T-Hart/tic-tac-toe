var userLetter = "X";
var counter = 0;
var gameOver = false;

function resetGame() {
    $('#title').show();
    $('#messageDiv').hide();

    for (item = 1; item <= 9; item++) {
        var theBoxId = "#box" + item;
        $(theBoxId).html("");
        $(theBoxId).css("color", "#fff");
    }
    userLetter = "X";
    counter = 0;
    gameOver = false;
}

function changeUser() {
    if (userLetter === "X") {
        userLetter = "O";
    }
    else if (userLetter === "O") {
        userLetter = "X";
    }
    else {
        $('#messageDiv').show();
        $('#theMessage').html('Something went wrong!');
    }
};

function completeRow(x, y, z, k, l, m) { 
    if ((x.length == 1) && (x == y) && (x == z)) {
        gameOver = true;
        $('#title').hide();
        $('#messageDiv').show();
        $(k).css("color", "#ff880d");
        $(l).css("color", "#ff880d");
        $(m).css("color", "#ff880d");
        $('#theMessage').html(x + " wins!");
    }
    else {
        console.log("keep going");
    }
};

function checkForWin() {
    var a = {
        letter: $("#box1").html(),
        id: "#box1"
    }
    var b = {
        letter: $('#box2').html(),
        id: "#box2"
    }
    var c = {
        letter: $('#box3').html(),
        id: "#box3"
    }
    var d = {
        letter: $('#box4').html(),
        id: "#box4"
    }
    var e = {
        letter: $('#box5').html(),
        id: "#box5"
    }
    var f = {
        letter: $('#box6').html(),
        id: "#box6"
    }
    var g = {
        letter: $('#box7').html(),
        id: "#box7"
    }
    var h = {
        letter: $('#box8').html(),
        id: "#box8"
    }
    var i = {
        letter: $('#box9').html(),
        id: "#box9"
    }
    if (counter > 4) {
        completeRow(a.letter, b.letter, c.letter, a.id, b.id, c.id);
        completeRow(d.letter, e.letter, f.letter, d.id, e.id, f.id);
        completeRow(g.letter, h.letter, i.letter, g.id, h.id, i.id);   
        completeRow(a.letter, d.letter, g.letter, a.id, d.id, g.id);
        completeRow(b.letter, e.letter, h.letter, b.id, e.id, h.id);
        completeRow(c.letter, f.letter, i.letter, c.id, f.id, i.id);
        completeRow(a.letter, e.letter, i.letter, a.id, e.id, i.id);
        completeRow(c.letter, e.letter, g.letter, c.id, e.id, g.id);
    }

    if ((counter == 9) && (gameOver == false)) {
        gameOver = true;
        $('#title').hide();
        $('#messageDiv').show();
        $('#theMessage').html("Cat's Game!");
    }
};

$('.box').click(function() {
    if (gameOver == false) {
        counter++;
        let thisSpace = $(this).html();
        if (thisSpace == false) {
            $(this).html(userLetter);
            setTimeout(() => {
                checkForWin();
            }, 1000);
            changeUser();
        }
        else {
            alert('This space is taken. Try another!');
        }
    }
    else {
        $('#title').hide();
        $('#messageDiv').show();
        alert('Game Over. Click the "Play Again" button to start a new game.');   
    }
})