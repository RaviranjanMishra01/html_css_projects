let hamburger = document.querySelector(".hamburger-btn");
let nav2 = document.querySelector(".nav2");
let blurr = document.querySelector(".content");
let close_btn = document.querySelector(".close-btn")


hamburger.addEventListener("click",function(){
    nav2.classList.toggle("active");
    hamburger.classList.add("active_close");
    close_btn.classList.add("hame_off");
})
blurr.addEventListener("click",function(){
    nav2.classList.remove("active");
    close_btn.classList.remove("hame_off");
    hamburger.classList.remove("active_close");
})
close_btn.addEventListener("click",function(){
        hamburger.classList.remove("active_close");
        nav2.classList.remove("active");
        close_btn.classList.remove("hame_off");
})