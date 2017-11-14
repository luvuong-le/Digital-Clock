/* Current Clock Time */

let hours = document.getElementById("hour");
let minute = document.getElementById("min");
let second = document.getElementById("second");
let milli = document.getElementById("milli");

function updateClock() {
    let currentDateandTime = new Date();
    hours.innerHTML = currentDateandTime.getHours() - 12 + ":";
    if (currentDateandTime.getMinutes() < 10) {
        minute.innerHTML = "0" + currentDateandTime.getMinutes() + ":";
    } else {
        minute.innerHTML = currentDateandTime.getMinutes() + ":";
    }
    second.innerHTML = currentDateandTime.getSeconds();
    //console.log("Current Time: " + currentDateandTime);
}

let time = setInterval(updateClock, 200);

/* Countdown Timer */
let submitBtn = document.getElementById("submitBtn");

/* Form Values */
let formHour = document.getElementById("countHour");
let formMin = document.getElementById("countMin");
let formSeconds = document.getElementById("countSec");

/* Countdown Timer Values */
let CDHour = document.getElementById("count-hour-value");
let CDMin = document.getElementById("count-min-value");
let CDSeconds = document.getElementById("count-second-value");

submitBtn.addEventListener("click", (e) => {
    /* Begin the count down */

    e.preventDefault();

    let countdown = setInterval(function() {
        formSeconds.value--;

        if (formHour.value == 0 && formMin.value == 0 && formSeconds.value == 0) {
            CDSeconds.innerHTML = "0" + formSeconds.value;
            clearInterval(countdown);
            console.log("Countdown Finished");
        } else {
            /* If the seconds reach 0, -1 from minutes and put seconds back to 60 */
            if (formSeconds.value == 0) {
                formMin.value--;
                formSeconds.value = 59;
            }

            if (formMin.value == 0 && formHour.value != 0) {
                formHour.value--;
                formMin.value = 59;
            }

            /* Set the values */
            if (formHour.value < 10) {
                CDHour.innerHTML = "0" + formHour.value + ":";
            } else {
                CDHour.innerHTML = formHour.value + ":";
            }

            if (formMin.value < 10) {
                CDMin.innerHTML = "0" + formMin.value + ":";
            } else {
                CDMin.innerHTML = formMin.value + ":";
            }

            if (formSeconds.value < 10) {
                CDSeconds.innerHTML = "0" + formSeconds.value;
            } else {
                CDSeconds.innerHTML = formSeconds.value;
            }

            /* If the seconds reach 0, -1 from minutes and put seconds back to 60 */
            if (formSeconds.value == 0) {
                formMin.value--;
                formSeconds.value = 59;
            }

            if (formMin.value == 0 && formHour.value != 0) {
                formHour.value--;
                formMin.value = 59;
            }

            /* Set the values */
            if (formHour.value < 10) {
                CDHour.innerHTML = "0" + formHour.value + ":";
            } else {
                CDHour.innerHTML = formHour.value + ":";
            }

            if (formMin.value < 10) {
                CDMin.innerHTML = "0" + formMin.value + ":";
            } else {
                CDMin.innerHTML = formMin.value + ":";
            }

            if (formSeconds.value < 10) {
                CDSeconds.innerHTML = "0" + formSeconds.value;
            } else {
                CDSeconds.innerHTML = formSeconds.value;
            }   
        }
        
        console.log(formHour.value + " hours and " + formMin.value + " minutes and " + formSeconds.value + " seconds left");

       
    }, 1000);

});