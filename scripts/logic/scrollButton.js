// scrollButton.js

import {
    scrollTopButton,

} from '../sharedElements.js';


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

addEventListener("scroll", scrollTopButton_Show);
scrollTopButton.addEventListener("click", scrollTopButton_Activate);