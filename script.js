

function login() {
    var firstplayer = document.getElementById("player1").value
    var secondplayer = document.getElementById("player2").value
    localStorage.setItem("player1",firstplayer);
    localStorage.setItem("player2",secondplayer);
}