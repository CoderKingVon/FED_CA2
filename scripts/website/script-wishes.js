// DECLARATION OF ELEMENTS

/* 
=====================
        Body 
=====================
*/
const body = document.getElementById("body");


// FUNCTIONS SECTION

/* 
=======================================================================
    Collections of element with <p> tag that needs font size change
=======================================================================
*/
/* Body */

/* Form */
// DECLARATION OF ELEMENTS
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

const allFormsInput = wishes_Form.getElementsByTagName("input");
const formsMessageTextarea = document.getElementById("message");

// FUNCTIONS SECTION

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

    const allRegions = ["Central-Region", "North-Region", "North-East-Region", 
    "East-Region", "West-Region"];

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