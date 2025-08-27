let round = document.querySelector(".round");
let body = document.querySelector("body");
round.addEventListener("click", function () {
  console.log("ravi aa gaya");
  round.classList.toggle("roundmove");
  body.classList.toggle("color");
});
