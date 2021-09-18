let index = 0;
let attempt = 0;
let score = 0;
let wrong= 0;
let correct=0;                                                        
let questions = quiz.sort(function () {
    return 0.5 - Math.random();
});

let totalQuestion = questions.length;

$(function(){

//timer code start here

let totalTime=200;
let min =0;
let sec =0;
let counter=0;

let timer= setInterval(function () {

    counter++;
    min = Math.floor( ( totalTime-counter)/60);
    sec = totalTime -(min*60) - counter;

$(".timerBox span") . text(min + ":"  + sec);

if( counter == totalTime){

    alert("time's up.press ok to show the result");
    result();
clearInterval(timer);

}
}, 1000);
//timer code end here

// print question


printQuestion(index);

});


//function to print question start

function printQuestion(i){
   
    $(".questionBox").text(questions[i].question);

    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
}

//function print question end


//function to check answer start

function checkAnswer(option){
 attempt++;
 let optionClicked = $(option).data("opt")

 console.log(questions[index]);

 if(optionClicked==questions[index].answer){
     $(option).addClass("right");
     score++;
 } else{
     $(option).addClass("wrong");
     wrong++;
 }
$(".scoreBox span").text(score);



$(".optionBox span").attr("onclick","");
}


//function to check answer end


//function for the next quetion

function showNext(){
      
if(index >=(questions.length - 1)){

    showResult(0);
    return;
}


    index++;

    $(".optionBox span").removeClass();

    $(".optionBox span").attr("onclick","checkAnswer(this)");

    printQuestion(index);
}
 

//function for result start

function showResult(j){

    if(
        j==1 &&
        index < questions.length -1 &&
        !confirm(
            " quiz has not finished yet.press ok to skip quiz and get your final result"
            )
        ){

          return;
            
        }


result();
}


//function for the result end


//result functon start
function result(){

    $("#questionScreen").hide();
    $("#resultScreen").show();
    
    $("#totalQuestion").text(totalQuestion);
    
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score);
    
    $("#wrongAnswers").text(wrong);




}

//result function start
