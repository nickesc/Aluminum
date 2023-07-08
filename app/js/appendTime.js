const dateInput = document.getElementById("dateInput");
const timeInInput = document.getElementById("timeInInput");
const timeOutInput = document.getElementById("timeOutInput");
const appendTimeForm = document.getElementById("appendTimeForm");
const verticalNotesInput = document.getElementById("verticalNotesInput");
const horizontalNotesInput = document.getElementById("horizontalNotesInput");

const timer = document.getElementById("timerContainer");
const timerHour = document.getElementById("timerHour");
const timerMinute = document.getElementById("timerMinute");
const timerSecond = document.getElementById("timerSecond");
const hourglassEmpty = document.getElementById("timerHourglassEmpty");
const hourglassHigh = document.getElementById("timerHourglassHigh");
const hourglassLow = document.getElementById("timerHourglassLow");
const hourglassFull = document.getElementById("timerHourglassFull");

const hideButton = document.getElementById("hideButton");
const showButton = document.getElementById("showButton");

const clockInButton = document.getElementById("clockInButton");
const clockOutButton = document.getElementById("clockOutButton");
const verticalSubmitButton = document.getElementById("verticalSubmitButton");
const horizontalSubmitButton = document.getElementById("horizontalSubmitButton");
const verticalClearButton = document.getElementById("verticalClearButton");
const horizontalClearButton = document.getElementById("horizontalClearButton");

const confirmClearDialog = document.getElementById("confirmClearDialog");

let dateString = "";
let timeInString = "";
let timeOutString = "";
let notesString = "";

let timerStart = 0;
let timerRunning = false;
let hourglassInterval = 1000;
// Sync vertical and horizontal note fields so that if the display orientation or window size changes, the text stays the same
verticalNotesInput.addEventListener("change", (event) => {
    horizontalNotesInput.value = event.target.value;
});
horizontalNotesInput.addEventListener("change", (event) => {
    verticalNotesInput.value = event.target.value;
});

function showTimer(){
    timer.style.display="unset";
}

function hideTimer(){
    timer.style.display = "none";
}

function startTimer(){

    timerStart = new Date();
    timerRunning = true;
    setHourglassColor("#24a148");
    setTimeout(tickTimer, hourglassInterval);
    setTimeout(turnHourglassHigh, hourglassInterval);
}
function stopTimer(){
    timerRunning = false;
    setHourglassColor("#262626");
    setHourglassFull();
}
function clearTimer(){

    timerStart = 0;
    timerRunning = false;
    setHourglassColor("#262626");
    timerHour.innerText = timerStart.toString().padStart(2, "0");
    timerMinute.innerText = timerStart.toString().padStart(2, "0");
    timerSecond.innerText = timerStart.toString().padStart(2, "0");

    setHourglassEmpty();

}

function turnHourglassEmpty() {
    if (timerRunning) {
        hourglassEmpty.style.display = "unset";
        hourglassHigh.style.display = "none";
        hourglassLow.style.display = "none";
        hourglassFull.style.display = "none";
        setTimeout(turnHourglassHigh, hourglassInterval);
    }
}
function turnHourglassHigh(){
    if (timerRunning){
        hourglassEmpty.style.display = "none";
        hourglassHigh.style.display = "unset";
        hourglassLow.style.display = "none";
        hourglassFull.style.display = "none";
        setTimeout(turnHourglassFull, hourglassInterval);
        //setTimeout(turnHourglassLow, hourglassInterval);
    }
}
function turnHourglassFull() {
    if (timerRunning) {
        hourglassEmpty.style.display = "none";
        hourglassHigh.style.display = "none";
        hourglassLow.style.display = "none";
        hourglassFull.style.display = "unset";
        setTimeout(turnHourglassLow, hourglassInterval);
    }
}
function turnHourglassLow(){
    if (timerRunning) {
        hourglassEmpty.style.display = "none";
        hourglassHigh.style.display = "none";
        hourglassLow.style.display = "unset";
        hourglassFull.style.display = "none";
        setTimeout(turnHourglassEmpty, hourglassInterval);
    }
}

function setHourglassEmpty() {
    hourglassEmpty.style.display = "unset";
    hourglassHigh.style.display = "none";
    hourglassLow.style.display = "none";
    hourglassFull.style.display = "none";
}
function setHourglassFull(){
    hourglassEmpty.style.display = "none";
    hourglassHigh.style.display = "none";
    hourglassLow.style.display = "none";
    hourglassFull.style.display = "unset";
}
function setHourglassColor(color) {
    hourglassEmpty.style.color = color;
    hourglassHigh.style.color = color;
    hourglassLow.style.color = color;
    hourglassFull.style.color = color;
}


function tickTimer(){

    let timeDiff = new Date();

    let currTime = new Date();

    timeDiff = (currTime - timerStart) / 1000;

    hourDiff = timeDiff/3600;
    hourDiff = Math.floor(hourDiff);

    minuteDiff = (timeDiff - (hourDiff*3600))/60;
    minuteDiff = Math.floor(minuteDiff);


    secDiff = timeDiff - (hourDiff*3600) - (minuteDiff*60);
    secDiff = Math.floor(secDiff);


    if (timerRunning){
        //console.log(hourDiff, minuteDiff, secDiff);

        timerHour.innerText = hourDiff.toString().padStart(2, "0");
        timerMinute.innerText = minuteDiff.toString().padStart(2, "0");
        timerSecond.innerText = secDiff.toString().padStart(2, "0");

        setTimeout(tickTimer, 1000);
    }

    //console.log(timeDiff.getHours(), timeDiff.getMinutes(), timeDiff.getSeconds())

}



function enableNotes() {
    verticalNotesInput.disabled = false;
    horizontalNotesInput.disabled = false;
}
function disableNotes() {
    verticalNotesInput.disabled = true;
    horizontalNotesInput.disabled = true;
}

function enableSubmit() {
    verticalSubmitButton.disabled = false;
    horizontalSubmitButton.disabled = false;
}
function disableSubmit() {
    verticalSubmitButton.disabled = true;
    horizontalSubmitButton.disabled = true;
}

function enableClear() {
    verticalClearButton.disabled = false;
    horizontalClearButton.disabled = false;
}
function disableClear() {
    verticalClearButton.disabled = true;
    horizontalClearButton.disabled = true;
}

function enableClockIn() {
    clockInButton.disabled = false;
}
function disableClockIn() {
    clockInButton.disabled = true;
}
function hideClockIn(){
    clockInButton.style.display="none";
}
function showClockIn() {
    clockInButton.style.display = "unset";
}

function enableClockOut() {
    clockOutButton.disabled = false;
}
function disableClockOut() {
    clockOutButton.disabled = true;
}
function hideClockOut() {
    clockOutButton.style.display = "none";
}
function showClockOut() {
    clockOutButton.style.display = "unset";
}

function disableForm() {
    disableNotes();
    disableClear();
    disableSubmit();
    disableClockIn();
    disableClockOut();
}

function setText(element, text) {
    //element.disabled = false;
    element.value = text;
    //element.disabled = true;
}
function getText(element) {
    return element.value;
}

function clearForm() {
    appendTimeForm.reset();
    setText(verticalNotesInput, "");
    disableSubmit();
    disableClockOut();
    disableNotes();
    disableClear();
    enableClockIn();
    hideTimer();
    clearTimer();
    hideClockOut();
    showClockIn();
}

function _clockIn() {
    let date = new Date();
    //console.log(date.toJSON());

    // set clock in date
    dateString = date.toJSON().slice(0, 10);
    setText(dateInput, dateString);

    // set clock in time
    timeInString = date.toLocaleString("en-GB").slice(12, 17);
    setText(timeInInput, timeInString);

    // enable clock out
    enableClockOut();

    // enable notes
    enableNotes();

    // enable clear buttons
    enableClear();

    // show and start the timer
    showTimer();
    startTimer();

    // disable clock in
    disableClockIn();

    // hide the clock in button and show the clock out button
    hideClockIn();
    showClockOut();
}

function _clockOut() {
    let date = new Date();
    //console.log(date.toJSON());

    // set clock out time
    timeOutString = date.toLocaleString("en-GB").slice(12, 17);
    setText(timeOutInput, timeOutString);

    // enable submit
    enableSubmit();

    // stop the timer
    stopTimer();

    // disable clock out
    disableClockOut();
}

function _submit() {
    // get the
    notesString = getText(horizontalNotesInput);
    console.log(dateString, timeInString, timeOutString, notesString);
    clearForm();
    return false;
}

function _confirmClear() {
    confirmClearDialog.inert = true;
    confirmClearDialog.showModal();
    confirmClearDialog.inert = false;
}

function _clear() {
    clearForm();
}

function _hide(){
    appendTimeForm.classList.add("hiddenForm");
    hideButton.style.display = "none";
    showButton.style.display = "unset";
}

function _show(){
    appendTimeForm.classList.remove("hiddenForm");
    hideButton.style.display = "unset";
    showButton.style.display = "none";
}
// validate that the noun is a usable noun before handing it off to this function (only 1 word, correct case?)
function setShiftNoun(noun){
    noun = noun.toLowerCase();
    notesPlaceholder = `${noun} notes`;
    horizontalNotesInput.placeholder = notesPlaceholder;
    verticalNotesInput.placeholder = notesPlaceholder;
}
