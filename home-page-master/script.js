let ravi0 = document.querySelector(".ravi0");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let change1 = document.querySelector(".change-text");
let change2 = document.querySelector(".change-text");
let click = 1;
const totalImages = 3; 

right.addEventListener("click", () => {
  click = click < totalImages ? click + 1 : 1;
  ravi0.setAttribute(
    "src",
    `./room-homepage-master/room-homepage-master/images/desktop-image-hero-${click}.jpg`
  );
  change1.textContent = "Your challenge is to build out this e-commerce homepage and get it looking as close to the design as possible."
});

left.addEventListener("click", () => {
  click = click > 1 ? click - 1 : totalImages; 
  ravi0.setAttribute(
    "src",
    `./room-homepage-master/room-homepage-master/images/desktop-image-hero-${click}.jpg`
  );
  change1.textContent = "ravi is here"
});



