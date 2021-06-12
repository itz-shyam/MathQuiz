function addUser() {
    player1=document.getElementById("player1").value;
     player2=document.getElementById("player2").value;

     localStorage.setItem("player1",player1);
     localStorage.setItem("player2",player2);

     localStorage.setItem("player1score",0);
     localStorage.setItem("player2score",0);

     
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
    window.location="main.html";
}

playerq=1;
playera=2;

document.getElementById("p1name").innerHTML=player1name + ":";
document.getElementById("p2name").innerHTML=player2name + ":";

document.getElementById("p1score").innerHTML=player1score;
document.getElementById("p2score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="Question Turn = " + player1name;
document.getElementById("player_answer").innerHTML="Answer Turn = " + player2name;

function send() {
    var word = document.getElementById("word").value;
    var realword = word.toLowerCase();

    var charat1 = realword.charAt(1);
    console.log("Getting Char at letter 1");

    var wordhalf = Math.Floor(word.length/2)
    var charat2 = realword.charAt(wordhalf);
    console.log("Getting Char at letter half");

    var lastword = word.length-1;
    var charat3 = realword.charAt(lasttword);
    console.log("Getting Char at letter last");

    var remove1 = realword.replace(charat1,"_");
    var remove2 = remove1.replace(charat2,"_");
    var remove3 = remove2.replace(charat3,"_");
    console.log(remove3);
// -----------------------------------------------------
    var word2 = document.getElementById("word2").value;
    var realword2 = word.toLowerCase();

    var char2at1 = realword.charAt(1);
    console.log("Getting Char at letter 1");

    var wordhalf = Math.Floor(word.length/2)
    var char2at2 = realword.charAt(wordhalf);
    console.log("Getting Char at letter half");

    var lastword2 = word2.length-1;
    var char2at3 = realword.charAt(lasttword);
    console.log("Getting Char at letter last");

    var remove12 = realword2.replace(charat1,"_");
    var remove22 = remove12.replace(charat2,"_");
    var remove32 = remove22.replace(charat3,"_");
    console.log(remove32);
}