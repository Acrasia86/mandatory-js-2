

let target = 0;
let score = 1;
let score2 = 1;

var playerOne = document.getElementById("player-one");
var playerTwo = document.getElementById("player-two");

    var box1 = document.getElementById("0");
    var box2 = document.getElementById("1");
    var box3 = document.getElementById("2");
    var box4 = document.getElementById("3");
    var box5 = document.getElementById("4");
    var box6 = document.getElementById("5");
    var box7 = document.getElementById("6");
    var box8 = document.getElementById("7");
    var box9 = document.getElementById("8");

let cells = document.querySelectorAll(".box");

turn();

function whoWon()
{
    
    if(box1.textContent !== "" && box1.textContent === box2.textContent && box1.textContent === box3.textContent)
    {

        if(box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X")
        {
            
           playerOneWinner();
            b1();
            document.getElementById("score-box-one").textContent = score;
            score++;
            
            removeClick();
        }

        else if(box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O")
        {
            b1();
            playerTwoWinner();
            removeClick();
            document.getElementById("score-box-two").textContent = score2;
            score2++;
        }

        
    }

    else if(box1.textContent !== "" && box1.textContent === box4.textContent && box1.textContent === box7.textContent)
    {
        if(box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X")
        {
            playerOneWinner();
            removeClick();
            document.getElementById("score-box-one").textContent = score;
            score++;
        }

        else if(box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O")
        {
            playerTwoWinner();
            removeClick();
            document.getElementById("score-box-two").textContent = score2;
            score2++;
        }

        box1.style.color = "blue";
        box4.style.color = "blue";
        box7.style.color = "blue";
        
    }

    else if(box1.textContent !== "" && box1.textContent === box5.textContent && box1.textContent === box9.textContent)
    {
        if(box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X")
        {
            playerOneWinner();
            removeClick();
            document.getElementById("score-box-one").textContent = score;
            score++;
        }

        else if(box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O")
        {
            playerTwoWinner();
            removeClick();
            document.getElementById("score-box-two").textContent = score2;
            score2++;
        }
      
        box1.style.color = "blue";
        box5.style.color = "blue";
        box9.style.color = "blue";
    }

    else if(box2.textContent !== "" && box2.textContent === box5.textContent && box2.textContent === box8.textContent)
    {
        if(box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X")
        {
            playerOneWinner();
            removeClick();
            document.getElementById("score-box-one").textContent = score;
            score++;
        }

        else if(box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O")
        {
            playerTwoWinner();
            removeClick();
            document.getElementById("score-box-two").textContent = score2;
            score2++;
        }
      
        box2.style.color = "blue";
        box5.style.color = "blue";
        box8.style.color = "blue";
    }
     //258
    else if(box3.textContent !== "" && box3.textContent === box6.textContent && box3.textContent === box9.textContent)
    {
        if(box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X")
        {
            playerOneWinner();
            removeClick();
            document.getElementById("score-box-one").textContent = score;
            score++;
        }

        else if(box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O")
        {
            playerTwoWinner();
            removeClick();
            document.getElementById("score-box-two").textContent = score2;
            score2++;
        }
        box3.style.color = "blue";
        box6.style.color = "blue";
        box9.style.color = "blue";
    }
    //246
    else if(box3.textContent !== "" && box3.textContent === box5.textContent && box3.textContent === box7.textContent)
    {
        if(box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X")
        {
            playerOneWinner();
            removeClick();
            document.getElementById("score-box-one").textContent = score;
            score++;
        }

        else if(box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O")
        {
            playerTwoWinner();
            removeClick();
            document.getElementById("score-box-two").textContent = score2;
            score2++;
        }
        
        box3.style.color = "blue";
        box5.style.color = "blue";
        box7.style.color = "blue";
    }
    //345
    else if(box4.textContent !== "" && box4.textContent === box5.textContent && box4.textContent === box6.textContent)
    {
        if(box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X")
        {
            playerOneWinner();
            removeClick();
            document.getElementById("score-box-one").textContent = score;
            score++;

            
        }

        else if(box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O")
        {
            playerTwoWinner();
            removeClick();
            document.getElementById("score-box-two").textContent = score2;
            score2++;
        }
        box4.style.color = "blue";
        box5.style.color = "blue";
        box6.style.color = "blue";
    }
    //678
    else if(box7.textContent !== "" && box7.textContent === box8.textContent && box7.textContent === box9.textContent)
    {
        if(box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X")
        {
            playerOneWinner();
            removeClick();
            document.getElementById("score-box-one").textContent = score;
            score++;
        }

        else if(box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O")
        {
            playerTwoWinner();
            removeClick();
            document.getElementById("score-box-two").textContent = score2;
            score2++;
        }
        box7.style.color = "blue";
        box8.style.color = "blue";
        box9.style.color = "blue";
    }
}

function turn()
{
    target = 0;

for(let i = 0; i < cells.length; i++)
{
  
    cells[i].onclick = function()
    {
        if(target % 2 === 0)
        {
        this.textContent = "X";
        target++;
        this.onclick = null;
        whoWon();
       
        
        }
        else
        {
            this.textContent = "O";
            target++;
            this.onclick = null;
            whoWon();
            
        }
    
    };

}

}


function removeClick()
{
    var eles = document.querySelectorAll(".box");
    for (var i=0; i < eles.length; i++)
       eles[i].onclick = function() {
         return false;
       }
}

function resetGame()
{

    var reset = document.querySelectorAll(".box");

   
    


    for(let i = 0; i < cells.length; i++)
    {
        reset[i].textContent = "";
    }

   

    document.getElementById("player-one").textContent = "Player 1";
    document.getElementById("player-two").textContent = "Player 2";


    document.getElementById("0").style.color = "black";
    document.getElementById("1").style.color = "black";
    document.getElementById("2").style.color = "black";
    document.getElementById("3").style.color = "black";
    document.getElementById("4").style.color = "black";
    document.getElementById("5").style.color = "black";
    document.getElementById("6").style.color = "black";
    document.getElementById("7").style.color = "black";
    document.getElementById("8").style.color = "black";
    
    playerOne.style.fontWeight = "normal";
    playerOne.style.backgroundColor = "unset";

    playerTwo.style.fontWeight = "normal";
    playerTwo.style.backgroundColor = "unset";

    

    turn();

}


function playerOneWinner()
{
    playerOne.textContent = "Winner";
            playerOne.style.fontWeight = "bold";
            playerOne.style.backgroundColor = "orange";
}

function playerTwoWinner()
{
    playerTwo.textContent = "Winner";
            playerTwo.style.fontWeight = "bold";
            playerTwo.style.backgroundColor = "orange";

}


function b1()
{
    box1.style.color = "blue";
        box2.style.color = "blue";
        box3.style.color = "blue";
}