const player1_name = localStorage.getItem("player1_name");
const player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player_question").innerHTML = "Question turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send() {
    number1 = document.getElementById("number1_in").value;
    number2 = document.getElementById("number2_in").value;
    answer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + "X" + number2 + "</h4>";
    input = "<br><br> Answer:<input type='text' id='input_answer'>"
    button = "<br><br><button class='btn btn-primary' onclick='check()'>Check<i class='fa fa-check' aria-hidden='true'></i></button>"
    row = question + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_in").value = "";
    document.getElementById("number2_in").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_answer").value;
    if (get_answer == answer) {
        if(answer_turn == "player1"){
            player1_score++;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score++;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
    }
    document.getElementById("output").value = "";
    document.getElementById("number1_in").value = "";
    document.getElementById("number2_in").value = "";
}