function addUser() {
    player1=document.getElementById("player1").value;
     player2=document.getElementById("player2").value;

     localStorage.setItem("player1",player1);
     localStorage.setItem("player2",player2);

     localStorage.setItem("player1score",0);
     localStorage.setItem("player2score",0);

     window.location="main.html";
    };

function test(){
    add11=Number(localStorage.getItem("player1score")) + 1
    localStorage.setItem("player1score", add11)
    document.getElementById("p1score").innerHTML=localStorage.getItem("player1score");
}

function login() {
    var firstplayer = document.getElementById("player1").value
    var secondplayer = document.getElementById("player2").value
    localStorage.setItem("player1",firstplayer);
    localStorage.setItem("player2",secondplayer);
}