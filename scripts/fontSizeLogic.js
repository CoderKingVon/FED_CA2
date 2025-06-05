// fontSizeLogic.js
import {
  allPElements,
  fontsizeDefaultBtn,
  fontsizeLargeBtn,
  fontsizeLargerBtn,
  fontsizeDefaultBtn2,
  fontsizeLargeBtn2,
  fontsizeLargerBtn2
} from './sharedElements.js';

function setFontSize(size) {
    let fontSizeValue;
    switch (size) {
        case "default": {
            fontSizeValue = "1rem";
            break;
        }
        case "large": {
            fontSizeValue = "1.25rem"; 
            break;
        }
        case "larger": {
            fontSizeValue = "1.5rem"; 
            break;
        }
    }
    document.body.style.fontSize = fontSizeValue;
    localStorage.setItem("fontSize", size);
    highlightFontSizeButtons(size);

}

function highlightFontSizeButtons(size) {
    const allButtons = [
        [fontsizeDefaultBtn, "default"],
        [fontsizeLargeBtn, "large"],
        [fontsizeLargerBtn, "larger"],
        [fontsizeDefaultBtn2, "default"],
        [fontsizeLargeBtn2, "large"],
        [fontsizeLargerBtn2, "larger"]
    ];

    for (const [btn, btnSize] of allButtons) {
        if (!btn) continue;
        btn.style.color = (btnSize === size) ? "#d8394e" : "white";
    }
}


// Attach event listeners if buttons exist
fontsizeDefaultBtn?.addEventListener("click", () => setFontSize("default"));
fontsizeLargeBtn?.addEventListener("click", () => setFontSize("large"));
fontsizeLargerBtn?.addEventListener("click", () => setFontSize("larger"));

fontsizeDefaultBtn2?.addEventListener("click", () => setFontSize("default"));
fontsizeLargeBtn2?.addEventListener("click", () => setFontSize("large"));
fontsizeLargerBtn2?.addEventListener("click", () => setFontSize("larger"));

// Apply saved font size on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedSize = localStorage.getItem("fontSize") || "default";
    setFontSize(savedSize);
});
