//grabbing elements 
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");

//function for when the start quiz button is clicked 
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

//if the exit button is clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}