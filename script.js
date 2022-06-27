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

//select the restart and quit elements from index.html 
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//function for restart button 
restart_quiz.onclick = ()=>{
    //show the quiz box 
    quiz_box.classList.add("activeQuiz");
    //next we need to hide the result box so it isnt overlapping
    result_box.classList.remove("activeResult");
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    //set a call to the showQuestions function 
    showQuestions(que_count); //call the showQuestions function
    queCounter(que_numb); //give the que value to the counter so it adds 
    clearInterval(counter); // clear the counter 
    clearInterval(counterLine);//clear counterLine
    startTimer(timeValue);//call the function to start the timer 
    startTimerLine(widthValue);//call the function for timer line 
    timeText.textContent = "Time Remaining";// timetext changed to this 
    next_btn.classList.remove("show");//hide the next button 
}

//if the quit button is clicked by user 
quit_quiz.onclick = ()=> {
    window.location.reload(); //reload the current window so it saves 
}
//select the html elements needed to move questions 
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

//if the next question button is clicked 
next_btn.onclick = ()=>{
    //need an if statement to start the quiz base values 
    if(que_count < questions.length - 1){
        //increase the question count
        que_count++; 
        //increase the que_numb value
        que_numb++; 
        //show the questions to the user
        showQuestions(que_count); 
        //give que_numb value to queCounter to see which question we're on
        queCounter(que_numb);
        //clear the counter 
        clearInterval(counter);
        //clear the counterLine
        clearInterval(counterLine);
        //call the function to start the 15 second timer per question
        startTimer(timeValue);
        //call function to start the timerline value as well
        startTimerLine(widthValue);
        //add the time left 
        timeText.textContent = "Time Remaining";
        //hide the next question button 
        next_btn.classList.remove("show");
    } else { //basically says else show the score and dont show more time 
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}


