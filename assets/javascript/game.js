
var rando;


var score = 0;
var wins = 0;
var losses = 0;


var thunderStone = 3;
var fireStone = 4;
var waterStone = 7;
var moonStone = 10;

function Begin(){

    

    score = 0;
    
    rando = (Math.floor(Math.random() * 101) + 19);

    console.log(rando);

    $("#randoBox").text(rando);
    $("#scoreBox").text(score);
    $("#winsNum").text(wins);
    $("#lossesNum").text(losses);
       
    }

    function Guess(stone){

        score += stone;

        $("#scoreBox").text(score);

        console.log(score);

       
               if(score > rando)
               {
                   alert("You Lose!");
                   losses++;
                   Begin();
               }

               if(score == rando)
               {
                   alert("You Win!");
                   wins++;
                   Begin();
               }
       
       
       }

       $(document).ready(function(){

        Begin();     

        
    $("#thunderbtn").click(function(){

        Guess(thunderStone);

    });

    $("#firebtn").on("click", function(){

        Guess(fireStone);

    });

    $("#waterbtn").on("click", function(){

        Guess(waterStone);

    });

    $("#moonbtn").on("click", function(){

        Guess(moonStone);

    });

     });
       
       
