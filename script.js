//get the button query 
const start_btn = document.querySelector(".start_btn button");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
//get the quiz query
const info_box = document.querySelector(".info_box");
const option_list = document.querySelector(".option_list");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
//get the time query
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer ,timer_sec");
const timeCount = document.querySelector(".timer .timer_sec");

//function for when the start quiz button is clicked 
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

//if the exit button is clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

//if the continuequiz button is clicked 
continue_btn.onclick = ()=>{
    //need command to hide the info box 
    info_box.classList.remove("activeInfo");
    //need command to show the quiz box 
    quiz_box.classList.add("activeQuiz");
    //add essential functions to the quiz
    showQuestions(0); 
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

//set the starting values for the quiz 
let timeValue = 15; //in seconds 
let que_count = 0; //for starting at question #0
let que_numb = 1; //for starting the first question 
let userScore = 0; //player gets a starting score of zero 
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");