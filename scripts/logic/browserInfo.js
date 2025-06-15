// browserInfo.js

import {
    footer_browser_info,
    footer_language_info,
} from '../sharedElements.js';

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

addEventListener("DOMContentLoaded", browserInfo);