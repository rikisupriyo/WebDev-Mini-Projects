//variables, constants

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const mode = document.querySelector(".toggle");
const body = document.querySelector("body");


//array of data

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//theme toggle

mode.addEventListener("click", function() {
    body.classList.toggle("dark");
    if(body.classList.contains("dark"))
        mode.innerHTML = "Light Mode";
    else
        mode.innerHTML = "Dark Mode";
});

//clock function

function setTime() {
    const d = new Date();
    const month = d.getMonth();
    const day = d.getDay();
    const date = d.getDate();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hours}:${minutes < 10? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setInterval(setTime, 1000);