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

const fontsizeDefaultBtn = document.getElementById("Font-Size-Default");
const fontsizeLargeBtn = document.getElementById("Font-Size-Large");
const fontsizeLargerBtn = document.getElementById("Font-Size-Larger");

const fontsizeDefaultBtn2 = document.getElementById("Font-Size-Default2");
const fontsizeLargeBtn2 = document.getElementById("Font-Size-Large2");
const fontsizeLargerBtn2 = document.getElementById("Font-Size-Larger2");

const scrollTopButton = document.getElementById("Scroll-Button-Top");

addEventListener("scroll", scrollTopButton_Show);
scrollTopButton.addEventListener("click", scrollTopButton_Activate);

// Desktop and Tablet Version
fontsizeDefaultBtn.addEventListener("click", function() {changeFontSize("default")});
fontsizeLargeBtn.addEventListener("click", function() {changeFontSize("large")});
fontsizeLargerBtn.addEventListener("click", function() {changeFontSize("larger")});

// Mobile Version
fontsizeDefaultBtn2.addEventListener("click", function() {changeFontSize("default")});
fontsizeLargeBtn2.addEventListener("click", function() {changeFontSize("large")});
fontsizeLargerBtn2.addEventListener("click", function() {changeFontSize("larger")});


/* Landing Page */

const landing_page = document.getElementById("Landing-Page-BG");
const landing_page_title_strings = ["Future Plans", "Progress", "Home"];
const landing_Page_title2 = document.getElementById("Content-Landing-Page-Title2");
const landing_page_subtitle = document.getElementById("Landing-Page-Subtitle");

addEventListener("DOMContentLoaded", typingWords);

/* Introduction Page */
const introduction_page = document.getElementById("Introduction-Page");

/* Future Plan (Sustainability Matters) */
const future_plan1 = document.getElementById("Future-Plan");

/* Future Plan (Our Pledge) */
const future_plan2 = document.getElementById("Future-Plan2");

/* Future Plan (SP News) */
const SP_News = document.getElementById("SP-News-Page");


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


// DECLARATION OF FUNCTIONS


// NavBar

function darkModeToggle() {
    if (darkModeSwitch.checked) {
        darkModeSwitchInfo.textContent = "Dark Mode";
        body.setAttribute("data-bs-theme", "dark");
    } else {
        darkModeSwitchInfo.textContent = "Light Mode";
        body.setAttribute("data-bs-theme", "light");
    }
}

const keywordsList = ["Introduction-Page", "Future-Plan","Future-Plan2", "SP-News-Page", "Sharing-Page"];

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

function changeFontSize(size) {
    if (size == 'default') {
        for (let i = 0; i < allPElements.length; i++) {
            allPElements[i].style.fontSize = "100%";

            fontsizeDefaultBtn.style.color = "#d8394e";
            fontsizeLargeBtn.style.color = "white";
            fontsizeLargerBtn.style.color = "white";

            fontsizeDefaultBtn2.style.color = "#d8394e";
            fontsizeLargeBtn2.style.color = "white";
            fontsizeLargerBtn2.style.color = "white";

        }
    } else if (size == 'large') {
        for (let i = 0; i < allPElements.length; i++) {
            allPElements[i].style.fontSize = "105%";

            fontsizeDefaultBtn.style.color = "white";
            fontsizeLargeBtn.style.color = "#d8394e";
            fontsizeLargerBtn.style.color = "white";

            fontsizeDefaultBtn2.style.color = "white";
            fontsizeLargeBtn2.style.color = "#d8394e";
            fontsizeLargerBtn2.style.color = "white";
        }        
    } else if (size == 'larger') {
        for (let i = 0; i < allPElements.length; i++) {
            allPElements[i].style.fontSize = "110%";

            fontsizeDefaultBtn.style.color = "white";
            fontsizeLargeBtn.style.color = "white";
            fontsizeLargerBtn.style.color = "#d8394e";

            fontsizeDefaultBtn2.style.color = "white";
            fontsizeLargeBtn2.style.color = "white";
            fontsizeLargerBtn2.style.color = "#d8394e";
        }
    }
}


// Body

/* Landing Page */
const delay1 = 80;
const delay2 = 60;
const delay3 = 800;
const delay4 = 400;
let strIndex = 0;
let isRemoving = false;
let arrIndex = 0;

let str, str_len;

function typingWords() {

    str = landing_page_title_strings[arrIndex];
    str_len = str.length;


    if (isRemoving == false) {
        if (strIndex < str_len) {
            landing_Page_title2.textContent += str.charAt(strIndex);
            ++strIndex;
            setTimeout(typingWords, delay1);
        } else {
            strIndex = landing_page_title_strings[arrIndex].length;
            if (arrIndex + 1 >= landing_page_title_strings.length) {
                return;
            }
            isRemoving = true;
            setTimeout(typingWords, delay3);
        }
    } else {
        if (strIndex >= 0) {
            landing_Page_title2.textContent = str.substring(0, strIndex);
            --strIndex;
            setTimeout(typingWords, delay2);
        } else {
            isRemoving = false;
            ++arrIndex;
            setTimeout(typingWords, delay4);
        }
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