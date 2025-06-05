/* 
=====================
        Body 
=====================
*/
const body = document.getElementById("body");

addEventListener("DOMContentLoaded", typingWords);

/* 
=======================================================================
    Collections of element with <p> tag that needs font size change
=======================================================================
*/

// Body

/* Landing Page */
// DECLARATION OF ELEMENTS
const landing_page = document.getElementById("Landing-Page-BG");
const landing_page_title_strings = ["Future Plans", "Progress", "Home"];
const landing_Page_title2 = document.getElementById("Content-Landing-Page-Title2");
const landing_page_subtitle = document.getElementById("Landing-Page-Subtitle");

const delay1 = 80;
const delay2 = 60;
const delay3 = 800;
const delay4 = 400;
let strIndex = 0;
let isRemoving = false;
let arrIndex = 0;
let str, str_len;

// DECLARATION OF FUNCTIONS
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