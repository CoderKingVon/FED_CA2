// searchPage.js
import {
    searchButton,
    searchKeywordInput
} from '../sharedElements.js';

function searchKeywords() {
    const input = searchKeywordInput.value.trim();

    // Check if keywordsList is defined and valid
    if (Array.isArray(window.keywordsList)) {
        if (window.keywordsList.includes(input)) {
            window.location.href = "#" + input;
        } else {
            alert("The keyword is not in the list!");
        }
    } else {
        alert("Search not available on this page.");
    }
}

searchButton.addEventListener("click", searchKeywords);

// Keypress event checks when a user enters any key, in the function will 
// validate if the user input Enter key
searchKeywordInput.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        searchKeywords();
    }
});