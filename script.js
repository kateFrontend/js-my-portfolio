// filter

const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};


// text animation

const words = ['web developer', 'photographer', 'designer']

gsap.to(".cursor", {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power2.inOut"
});

let tlMaster = gsap.timeline({ repeat: -1 });

words.forEach((word) => {
    let tlText = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
    });
    tlText.to(".animated-text", { duration: 1.5, text: word, });
    tlMaster.add(tlText);
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


