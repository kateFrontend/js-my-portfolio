// text animation

gsap.to(".typing", {
    text: "web developer",
    duration: 2,
    repeat: -1,
    repeatDelay: .7,
    ease: "power1.in",
    yoyo: true,
})

gsap.to("h3", {
    text: "web developer",
    duration: 2,
    repeat: -1,
    repeatDelay: .7,
    ease: "power1.in",
    yoyo: true,
})

// burger menu

let burgerMenu = document.querySelector("#burger-menu");
let overlay = document.querySelector("#menu");

burgerMenu.addEventListener("click", function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

// initializing aos  

AOS.init({
    delay:400,
    duration:1000
})


