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

/* Form */
const formsPage = document.getElementById("Forms-Page");
const wishes_Form = document.getElementById("Wishes-Form");

wishes_Form.addEventListener("submit", function(e) {
    validateForm(e);
});

// Uses bootstrap objects to get the modal with this id "Forms-Modal"
const Wishes_Modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("Forms-Modal"));
const Wishes_Modal_Header_Success = document.getElementById("Forms-Modal-Header-Success");
const Wishes_Modal_Header_Error = document.getElementById("Forms-Modal-Header-Error");
const Wishes_Modal_Message = document.getElementById("Forms-Modal-Message");

const ageSliderInput = document.getElementById("age-slider");
const ageSliderOutput = document.getElementById("age-count");

ageSliderInput.addEventListener("input", updateTextInput);

const allRegions = ["Central-Region", "North-Region", "North-East-Region", 
    "East-Region", "West-Region"];

const allFormsInput = wishes_Form.getElementsByTagName("input");
const formsMessageTextarea = document.getElementById("message");


/* TOS */
const TOSPage = document.getElementById("Terms-Of-Service-Page");

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
const keywordsList = ["Forms-Page", "Terms-Of-Service-Page"];

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

/* Body */

/* Form */

function updateTextInput() {
    ageSliderOutput.textContent = ageSliderInput.value;
}

function validateForm(event) {
    if (wishes_Form.checkValidity()) {
        validateFormHelper(event);
    }
}

function validateFormHelper(event) {
    // Reset Message
    Wishes_Modal_Message.textContent = "";

    let isValid = true;
    const errorMessage = [];
    const errorElements = [];
    for (let i = 0; i < allFormsInput.length; i++) {

        let inElement = allFormsInput[i];
        let inElementName = allFormsInput[i].name;

        if (inElementName == "first_name") {
            // allFormsInput[i+1] in this case is the last_name
            if (inElement.value == "" && allFormsInput[i+1].value != "") {
                errorMessage.push("If last name is filled, first name must also be filled");
                errorElements.push(inElement);
                isValid = false;
            }
        }

        if (inElementName == "phone_number") {
            let phone_number = inElement.value;
            let phone_number_trimmed = phone_number.replace(/ /g, "");

            if (!isNaN(phone_number_trimmed)) {
                if (phone_number_trimmed.length == 8) {
                    
                } else {
                    errorElements.push(inElement);
                    errorMessage.push("Phone Number is not 8 digits long!");
                    isValid = false;
                }

            } else {
                errorElements.push(inElement);
                errorMessage.push("Phone number must have digits only!");
                isValid = false;
            }

        } else if (inElementName == "region") {
            let inRegion = inElement.value;
            if (!allRegions.includes(inRegion)) {
                errorElements.push(inElement);
                errorMessage.push("Region is not in the list!");
                isValid = false;
            }

        } else if (inElementName == "age") {
            let inAge = inElement.value;
            if (inAge == 0) {
                errorElements.push(inElement);
                errorMessage.push("Age cannot be 0!");
                isValid = false;               
            }
        }
    }

    let str = formsMessageTextarea.value;
    let trimmed = str.replace(/ /g, "");
    if (trimmed.length == 0) {
        formsMessageTextarea.classList.add("is-invalid");
        errorMessage.push("Your message cannot be empty!");
        isValid = false;
    } else {
        formsMessageTextarea.classList.remove("is-invalid");
        formsMessageTextarea.classList.add("is-valid");
    }

    if (isValid == false) {
        
        // Class List is a collection type of object
        // Gives the classes .is-valid and .is-invalid to the invalid parts of the user inputs
        for (let i = 0; i < allFormsInput.length; i++) {

            if (errorElements.includes(allFormsInput[i])) {

                if (allFormsInput[i].classList.contains("is-valid")) {
                    allFormsInput[i].classList.remove("is-valid");
                    allFormsInput[i].classList.add("is-invalid");
                } else {
                    allFormsInput[i].classList.add("is-invalid");
                }
            } else {

                if (allFormsInput[i].classList.contains("is-invalid")) {
                    allFormsInput[i].classList.remove("is-invalid");
                    allFormsInput[i].classList.add("is-valid");
                } else {
                    allFormsInput[i].classList.add("is-valid");
                }
            }
        }

        // Gives more info about the errors in a modal
        Wishes_Modal_Header_Error.textContent = "Invalid Form!";
        for (let i = 1; i <= errorMessage.length; i++) {
            Wishes_Modal_Message.textContent += i + ". " + errorMessage[i-1] +"\n";
        }

        Wishes_Modal.show();
        event.preventDefault();

    } else {
        Wishes_Modal_Header_Error.textContent = "";
        Wishes_Modal_Header_Success.textContent = "Form Is Submitted!"; 
        Wishes_Modal_Message.textContent = "We will receive your heartwarming and kind message!";
        Wishes_Modal.show();
        event.preventDefault();
        const arr = document.getElementsByName("Forms-Modal-Close");
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener("click", function() {
                wishes_Form.submit();
                
            })
        }

    }

}
/* 
=====================
        Footer 
=====================
*/

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