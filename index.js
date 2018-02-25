var userLetter = "X";
var counter = 0;
var gameOver = false;

function resetGame() {
    $('#title').show();
    $('#messageDiv').hide();
    userLetter = "X";
    counter = 0;
    gameOver = false;
    $("#box1").html("");
    $('#box2').html("");
    $('#box3').html("");
    $('#box4').html("");
    $('#box5').html("");
    $('#box6').html("");
    $('#box7').html("");
    $('#box8').html("");
    $('#box9').html("");
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

function completeRow(x, y, z) {
    if ((x.length == 1) && (x == y) && (x == z)) {
        gameOver = true;
        $('#title').hide();
        $('#messageDiv').show();
        $('#theMessage').html(x + " wins!");
    }
    else {
        console.log("keep going");
    }
};

function checkForWin() {
    var a = $("#box1").html();
    var b = $('#box2').html();
    var c = $('#box3').html();
    var d = $('#box4').html();
    var e = $('#box5').html();
    var f = $('#box6').html();
    var g = $('#box7').html();
    var h = $('#box8').html();
    var i = $('#box9').html();

    if (counter > 4) {
        completeRow(a, b, c);
        completeRow(d, e, f);
        completeRow(g, h, i);
        completeRow(a, d, g);
        completeRow(b, e, h);
        completeRow(c, f, i);
        completeRow(a, e, i);
        completeRow(c, e, g);
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
        $('#theMessage').html("Game Over. Click the button to play again.");
    }
})