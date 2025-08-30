let round = document.querySelector(".round");
let body = document.querySelector("body");
let nav4 = document.querySelector(".nav4");
let n = document.querySelector(".n");
let crose = document.querySelector(".crose");


round.addEventListener("click", function () {
  round.classList.toggle("roundmove");
  body.classList.toggle("color");
});

nav4.addEventListener("click", function () {
  n.setAttribute("id", "phonenav");
});

crose.addEventListener("click", function () {
  n.removeAttribute("id");
});
