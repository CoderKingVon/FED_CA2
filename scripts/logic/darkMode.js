// darkMode.js

import {
    darkModeSwitch,
    darkModeSwitchInfo
} from '../sharedElements.js';

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

darkModeSwitch?.addEventListener("change", darkModeToggle);