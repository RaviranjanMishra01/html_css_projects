let round = document.querySelector(".round1");
let round2 = document.querySelector(".round2");

let body = document.querySelector("body");
let nav4 = document.querySelector(".nav4");
let n = document.querySelector(".n");
let crose = document.querySelector(".crose");
let colorchange = document.querySelector(".main");
const darkmoon = document.querySelector(".moondark");
const lightmoon = document.querySelector(".moonlight");
const dark_logo = document.querySelector(".dark");
let list_color = document.querySelectorAll(".change_color");

round.addEventListener("click", function () {
    console.log("Theme toggle clicked");
    round.classList.toggle("roundmove");
    body.classList.toggle("color");
    colorchange.classList.toggle("color");
    dark_logo.classList.toggle("look2");
    n.classList.toggle("color"); // Toggle dark mode for mobile menu
    list_color.forEach(element => {
        element.classList.toggle("color_change");
        // console.log(`Toggled color_change on: ${element.tagName} with id/class: ${element.id || element.className}`);
    });
});

nav4.addEventListener("click", function () {
    n.setAttribute("id", "phonenav");
});

crose.addEventListener("click", function () {
    n.removeAttribute("id");
});



round2.addEventListener("click", function () {
    console.log("Theme toggle clicked");
    round2.classList.toggle("roundmove");
    body.classList.toggle("color");
    colorchange.classList.toggle("color");
    dark_logo.classList.toggle("look2");
    n.classList.toggle("color"); // Toggle dark mode for mobile menu
    list_color.forEach(element => {
        element.classList.toggle("color_change");
        // console.log(`Toggled color_change on: ${element.tagName} with id/class: ${element.id || element.className}`);
    });
});