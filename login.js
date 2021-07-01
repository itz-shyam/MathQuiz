function login() { 
    var player1 = document.getElementById("p1name").value;
    var player2 = document.getElementById("p2name").value;

    
    localStorage.setItem("player1_name",player1);
    localStorage.setItem("player2_name",player2);
    window.location = "main.html";
}