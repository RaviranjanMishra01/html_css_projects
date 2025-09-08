let hamburger = document.querySelector(".icon_hamburger");
let close = document.querySelector(".close_button");
let phone_nav = document.querySelector(".nav2");


hamburger.addEventListener("click",function(){
    phone_nav.style.display = "block";
})

close.addEventListener("click",function(){
    phone_nav.style.display = "none"
})