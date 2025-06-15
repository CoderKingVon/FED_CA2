// footerClock.js

import {
    footer_date,
    footer_time
} from '../sharedElements.js';

function footer_Clock() {
    const date = new Date();

    let resultDate = "Date: ";
    let resultTime = "Time: ";

    resultDate += " " + date.toDateString();
    footer_date.textContent = resultDate;
    resultTime += " " + date.toLocaleTimeString();
    footer_time.textContent = resultTime;
}

setInterval(footer_Clock,1000);