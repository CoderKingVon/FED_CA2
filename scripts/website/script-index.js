
/* 
=====================
        Body 
=====================
*/
// DECLARATION OF ELEMENTS
const body = document.getElementById("body");

/* 
=======================================================================
    Collections of element with <p> tag that needs font size change
=======================================================================
*/

// Body

/* Celebration Page */

// DECLARATION OF ELEMENTS
const celebration_page_bg = document.getElementById("Celebration-Page-BG");

celebration_page_bg.addEventListener("mouseenter", typingWords);
celebration_page_bg.addEventListener("touchmove", typingWords);

// DECLARATION OF FUNCTIONS
function typingEffect(element, str, index, delay) {

    if (index < str.length) {
        element.textContent += str.charAt(index);
        index++;
        /* setTimeout(function, delay, param1 param2, .... ) */
        setTimeout(typingEffect, delay, element, str, index, delay);
    }
}

function typingWords() {

    const celebration_page_bg_title = document.getElementById("Content-Celebration-Page-BG-Title");
    const celebration_page_bg_subtitle = document.getElementById("Content-Celebration-Page-BG-Subtitle");

    const celebration_page_bg_title_str = "Come Celebrate With SP!";
    const celebration_page_bg_subtitle_str = "Scroll down below to find out about the details of the celebration of SP70 Annivesary!";


    typingEffect(celebration_page_bg_title, celebration_page_bg_title_str, 0, 100);
    typingEffect(celebration_page_bg_subtitle, celebration_page_bg_subtitle_str, 0, 30);
    celebration_page_bg.removeEventListener("mouseenter", typingWords);
    celebration_page_bg.removeEventListener("touchmove", typingWords);

}

/* Quiz Page */

// DECLARATION OF ELEMENTS

// Uses bootstrap objects to get the modal with this id "Quiz-Modal
const Quiz_Modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("Quiz-Modal"));

const Quiz_Modal_Header_Error = document.getElementById("Quiz-Modal-Header-Error");
const Quiz_Modal_Header_Success = document.getElementById("Quiz-Modal-Header-Success");
const Quiz_Modal_Message = document.getElementById("Quiz-Modal-Message");

const q1_Options = document.getElementsByName("q1-opt");
const q2_Options = document.getElementsByName("q2-opt");
const q3_Options = document.getElementsByName("q3-opt");
const q4_Options = document.getElementsByName("q4-opt");
const q5_Options = document.getElementsByName("q5-opt");

const quiz_all_options = [q1_Options,q2_Options,q3_Options,q4_Options,q5_Options];

const quiz_ClearBtn = document.getElementById("Content-Quiz-Page-Clear");
quiz_ClearBtn.addEventListener("click", quizpage_Clear_Answers);

const quiz_SubmitBtn = document.getElementById("Content-Quiz-Page-Submit");
quiz_SubmitBtn.addEventListener("click", quizpage_Validate);

// DECLARATION OF FUNCTIONS

function quizpage_Clear_Answers() {
    const opt_len = 4;
    const total_qn = 5;
    for (let i = 0; i < total_qn; i++) {
        for (let j = 0; j < opt_len; j++) {
            quiz_all_options[i][j].style = "background-color: none;";
            if (quiz_all_options[i][j].checked) {
                quiz_all_options[i][j].checked = false;
                break;
            }
        }
    }
    const quiz_Page_Clear_Message = document.getElementById("Content-Quiz-Page-Clear-Message");
    quiz_Page_Clear_Message.textContent = "Options Cleared!";

    setTimeout(function() {
        quiz_Page_Clear_Message.textContent = "";
    }, 2500
    )
}

function quizpage_Validate() {

    let count = 0;
    const opt_len = 4;
    const total_qn = 5;
    for (let i = 0; i < total_qn; i++) {
        for (let j = 0; j < opt_len; j++) {
            if (quiz_all_options[i][j].checked) {
                count++;
            }
        }
    }
    if (count < total_qn) {
        Quiz_Modal_Header_Error.textContent = "Error!";
        Quiz_Modal_Message.textContent = "You have not answered all questions!";
        Quiz_Modal.show();
    } else {
        Quiz_Modal_Header_Error.textContent = "";
        Quiz_Modal_Header_Success.textContent = "";
        quizpage_Check_Answers();
    }
}

function quizpage_Check_Answers() {

    let quiz_page_correct = 0;
    let result = 0;
    let grade = "";
    const opt_len = 4;
    const total_qn = 5;
    const ans = [3, 1, 2, 2, 0];

    for (let i = 0; i < total_qn; i++) {
        if (quiz_all_options[i][ans[i]].checked) {
            quiz_all_options[i][ans[i]].style = "background-color: green;";
            quiz_page_correct++;
        } else {
            for (let j = 0; j < opt_len; j++) {
                if (quiz_all_options[i][j].checked) {
                    quiz_all_options[i][j].style = "background-color: red;";
                }
            }
        }
    }

    result = quiz_page_correct/total_qn;
    if (result >= 0.8) {
        grade = "A";
        Quiz_Modal_Header_Success.textContent = "Excellent Job!";
    } else if (result < 0.8 && result >= 0.7) {
        grade = "B";
        Quiz_Modal_Header_Success.textContent = "Not Bad!";
    } else if (result < 0.7 && result >= 0.6) {
        grade = "C";
        Quiz_Modal_Header_Success.textContent = "Credits!";
    } else if (result < 0.6 && result >= 0.5) {
        grade = "D";
        Quiz_Modal_Header_Error.textContent = "Better Luck Next Time!";
    } else {
        grade = "F";
        Quiz_Modal_Header_Error.textContent = "Try Again";
    }

    Quiz_Modal_Message.textContent = "Your score is " + quiz_page_correct + "/" + total_qn + ".\n" + "Your grade is " + grade + ".";
    Quiz_Modal.show();
    
}

/* Countdown Page */

// DECLARATION OF ELEMENTS
const countdown_days = document.getElementById("SP-Anniversary-Countdown-Days");
const countdown_hours = document.getElementById("SP-Anniversary-Countdown-Hours");
const countdown_minutes = document.getElementById("SP-Anniversary-Countdown-Minutes");
const countdown_seconds = document.getElementById("SP-Anniversary-Countdown-Seconds");
const countdown_date = document.getElementById("SP-Anniversary-Countdown-Date");

const now = new Date();
let targetYear = now.getFullYear();
const spAnniversaryThisYear = new Date(`October 27, ${targetYear} 00:00:00`);

if (now > spAnniversaryThisYear) {
    targetYear += 1;
}

const countDownDate = new Date(`October 27, ${targetYear} 00:00:00`).getTime();
countdown_date.textContent = `27 October ${targetYear}`;

const runCountDownClock_Interval = setInterval(runCountDownClock, 1000);

// DECLARATION OF FUNCTIONS

function runCountDownClock() {
    const present = new Date().getTime();
    const distance = countDownDate - present;

    if (distance < 0) {
        document.getElementById("SP-Anniversary-Countdown-Message").textContent = "HAPPY 70th ANNIVERSARY!";
        clearInterval(runCountDownClock_Interval);
        countdown_days.textContent = "0";
        countdown_hours.textContent = "0";
        countdown_minutes.textContent = "0";
        countdown_seconds.textContent = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown_days.textContent = days;
    countdown_hours.textContent = hours;
    countdown_minutes.textContent = minutes;
    countdown_seconds.textContent = seconds;
}


