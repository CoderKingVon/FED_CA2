// DECLARATION OF ELEMENTS

/* 
=====================
        Body 
=====================
*/
const body = document.getElementById("body");
/* NavBar */
const darkModeSwitchInfo = document.getElementById("darkModeSwitchInfo");
const darkModeSwitch = document.getElementById("darkModeSwitch");

darkModeSwitch.addEventListener("change", darkModeToggle);

const searchButton = document.getElementById("Navbar-Keyword-Search-Button");
searchButton.addEventListener("click", searchKeywords);

const searchKeywordInput = document.getElementById("userSearchInput");
// Keypress event checks when a user enters any key, in the function will 
// validate if the user input Enter key
searchKeywordInput.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        searchKeywords();
    }
});

import {
  fontsizeDefaultBtn,
  fontsizeLargeBtn,
  fontsizeLargerBtn,
  fontsizeDefaultBtn2,
  fontsizeLargeBtn2,
  fontsizeLargerBtn2
} from "./sharedElements.js";

const scrollTopButton = document.getElementById("Scroll-Button-Top");
addEventListener("scroll", scrollTopButton_Show);
scrollTopButton.addEventListener("click", scrollTopButton_Activate);


/* Landing Page */
const landing_page = document.getElementById("Landing-Page-BG");

/* Introduction Page */
const introduction_page = document.getElementById("Introduction-Page");

/* History Page */
const history_page = document.getElementById("History-Page");

/* For All Ages */
const for_all_ages = document.getElementById("For-All-Ages");
const for_all_ages_2 = document.getElementById("For-All-Ages2");

/* Celebration Page */
const celebration_page_bg = document.getElementById("Celebration-Page-BG");

const celebration_page_bg_title = document.getElementById("Content-Celebration-Page-BG-Title");
const celebration_page_bg_title_red = document.getElementById("Content-Celebration-Page-BG-Title_Red");
const celebration_page_bg_subtitle = document.getElementById("Content-Celebration-Page-BG-Subtitle");

const celebration_page_bg_title_str = "Come Celebrate With SP!";
const celebration_page_bg_subtitle_str = "Scroll down below to find out about the details of the celebration of SP70 Annivesary!";

const celebration_page_2 = document.getElementById("Celebration-Page2");

celebration_page_bg.addEventListener("mouseenter", typingWords);
celebration_page_bg.addEventListener("touchmove", typingWords);

/* Quiz Page */
const quiz_Page = document.getElementById("Quiz-Page");
const quiz_Page_Clear_Message = document.getElementById("Content-Quiz-Page-Clear-Message");

// Uses bootstrap objects to get the modal with this id "Quiz-Modal"
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
quiz_SubmitBtn.addEventListener("click",quizpage_Validate);

/* News Page */
const news_Page = document.getElementById("SP-News-Page");


/* Countdown Page */

const countdown_days = document.getElementById("SP-Anniversary-Countdown-Days");
const countdown_hours = document.getElementById("SP-Anniversary-Countdown-Hours");
const countdown_minutes = document.getElementById("SP-Anniversary-Countdown-Minutes");
const countdown_seconds = document.getElementById("SP-Anniversary-Countdown-Seconds");

const countdown_date = document.getElementById("SP-Anniversary-Countdown-Date");
const currentYear = new Date().getFullYear();
countdown_date.textContent = `27 October ${currentYear}?`;

const runCountDownClock_Interval = setInterval(runCountDownClock, 1000);

/* 
=====================
        Footer 
=====================
*/

const footer_browser_info = document.getElementById("browser-logs");
const footer_language_info = document.getElementById("language-logs");
const footer_date = document.getElementById("date");
const footer_time = document.getElementById("time");

addEventListener("DOMContentLoaded", browserInfo);
const runfooter_Clock = setInterval(footer_Clock,1000);


// FUNCTIONS SECTION

// NavBar

// Dark Mode
function darkModeToggle() {
    if (darkModeSwitch.checked) {
        darkModeSwitchInfo.textContent = "Dark Mode";
        body.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        darkModeSwitchInfo.textContent = "Light Mode";
        body.setAttribute("data-bs-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        darkModeSwitch.checked = true;
        darkModeSwitchInfo.textContent = "Dark Mode";
        body.setAttribute("data-bs-theme", "dark");
    } else {
        darkModeSwitch.checked = false;
        darkModeSwitchInfo.textContent = "Light Mode";
        body.setAttribute("data-bs-theme", "light");
    }
});

const keywordsList = ["Introduction-Page", "History-Page", "For-All-Ages", "Celebration-Page-Bg", "Quiz-Page", "SP-News-Page"];

function searchKeywords() {
    let input = searchKeywordInput.value;
    if (keywordsList.includes(input)) {
        window.location.href = "#" + input;
    } else {
        alert("The keyword is not in the list!");
    }
}

function scrollTopButton_Show() {
    let scrollHeight = window.scrollY;
    let innerWidth = window.innerWidth;

    if (scrollHeight > 200 && innerWidth < 768) {
        scrollTopButton.style.display = "flex";
    } else {
        scrollTopButton.style.display = "none";
    }
}


function scrollTopButton_Activate() {

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
}

/* 
=======================================================================
    Collections of element with <p> tag that needs font size change
=======================================================================
*/

const allPElements = document.body.getElementsByTagName("p");

// Body

/* Celebration Page */

function typingEffect(element, str, index, delay) {
    if (index < str.length) {
        element.textContent += str.charAt(index);
        index++;
        /* setTimeout(function, delay, param1 param2, .... ) */
        setTimeout(typingEffect, delay, element, str, index, delay);
    }
}

function typingWords() {
    typingEffect(celebration_page_bg_title, celebration_page_bg_title_str, 0, 100);
    typingEffect(celebration_page_bg_subtitle, celebration_page_bg_subtitle_str, 0, 30);
    celebration_page_bg.removeEventListener("mouseenter", typingWords);
    celebration_page_bg.removeEventListener("touchmove", typingWords);

}

/* Quiz Page */

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
    quiz_Page_Clear_Message.textContent = "Options Cleared!";
    setTimeout(function() {
        quiz_Page_Clear_Message.textContent = "";
    },2500
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
    const ans = [3,1,2,2,0];

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

/* Coutdown Clock for SP70 annivesary */

// Set the date we're counting down to
// The return type is number of miliseconds
// 1000ms = 1s

// Update the count down every 1 second
function runCountDownClock() {

    // Get today's date and time
    // The return type is number of miliseconds 
    const present = new Date().getTime();

    /* Get the time of SP Annivesary Date */
    const currentYear = new Date().getFullYear();
    const countDownDate = new Date(`October 27, ${currentYear} 0:0:0`).getTime();

    // Find the distance between now and the count down date (in ms)
    let distance = countDownDate - present;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    countdown_days.textContent = days;
    countdown_hours.textContent = hours;
    countdown_minutes.textContent = minutes;
    countdown_seconds.textContent = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    document.getElementById("SP-Anniversary-Countdown-Message").textContent = "HAPPY 70th ANNIVERSARY!";
    clearInterval(runCountDownClock_Interval);
  }
}

// Footer

function browserInfo() {
    let browser = navigator.userAgent.toLowerCase();
    if (browser.includes("firefox")) {
        footer_browser_info.textContent += "Firefox";
    } else if (browser.includes("safari") 
        && !(browser.includes("chrome") || browser.includes("chromium"))) {
        footer_browser_info.textContent += "safari";
    } else if (browser.includes("opr") || browser.includes("opera")) {
        footer_browser_info.textContent += "Opera";
    } else if (browser.includes("chrome") 
        && !(browser.includes("chromium") || browser.includes("edg"))) {
        footer_browser_info.textContent += "Chrome";
    } else {
        footer_browser_info.textContent += "Unknown";
    }

    footer_language_info.textContent += navigator.language;
}

function footer_Clock() {
    const date = new Date();

    let resultDate = "Date: ";
    let resultTime = "Time: ";

    resultDate += " " + date.toDateString();
    footer_date.textContent = resultDate;
    resultTime += " " + date.toLocaleTimeString();
    footer_time.textContent = resultTime;
}

