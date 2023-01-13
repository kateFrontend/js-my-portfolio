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


