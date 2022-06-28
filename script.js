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

//get the questions from the array in the other js document
function showQuestions(index){
    const que_text = document.querySelector("que_text");

    //use js to append the div and pull questions from array 
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '<span>';
    //insert options from array into new divs to display in html 
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    //append the html with a new span element 
    que_text.innerHTML = que_tag;
    //add a div inside the option span
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll("option");

    //make the onclick apply to all the options 
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//if an option is clicked 
function optionSelected(answer){
    //clear the counter 
    clearInterval(counter);
    //clear counterline 
    clearInterval(counterLine);
    //get the option that was selected 
    let userAns = answer.textContent;
    //grab correct answer from array 
    let correcAns = questions[que_count].answer;
    //get all the available options 
    const allOptions = option_list.children.length;

    //if statement for the user getting the correct answer 
    if(userAns == correcAns){
        userScore += 1; //add 1 to the current score 
        answer.classList.add("correct"); //make the correct option green 
        console.log("Your answer is correct!");
        console.log("Your current score is = " + userScore); //show current score
    } else {
        answer.classList.add("incorrect"); //make wrong answer appear red 
        console.log("that answer was wrong! Loser!");

        //for loop to register answer to array of questions 
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){
                option_list.children[i].setAttribute("class", "Correct!");
                console.log("Correct answer has been chosen for you");
            }
        }
    }//once an option is selected you cant select a different one 
    for(i=0; i<allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show"); //display next button if an option has been chosen 
}

//function to show results at the end of the quiz 
function showResult(){
    info_box.classList.remove("activeInfo");//dont show info box or quiz box 
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult"); //show result box 
    const scoreText = result_box.querySelector(".score_text");

    //if statement for score  
    if(userScore > 0) {
        let scoreTag = '<span> Good job! You got <p>' + userScore + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

