
const navBtn = document.querySelector(".nav-btn")
const  navList = document.querySelector(".nav-list");
const  links = document.querySelector(".nav-link");

navBtn.addEventListener("click", function(){
    //Show nav List

    const linksheight = links.getBoundingClientRect().height;
    const containnerHeight = navList.getBoundingClientRect().height;

    if(containnerHeight === 0){
        navList.style.height = `${linksheight}px`;
    }
    else{
        navList.style.height = 0;
    }
    //Navbar btn 
    navBtn.classList.toggle("active");
})

  
const portfolioBox = document.querySelectorAll (".portfolio-shadow");

    portfolioBox.forEach(popup => popup.addEventListener("click",() => {
    popup.classList.toggle("active");
}))

// Skills

const skills = document.querySelector(".skills-section");
const spans = document.querySelectorAll(".inner-skills span");

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - 300){
        spans.forEach((span) => {
            span.style.width = span.dataset.value;
        })
    }
}


// Testimonial

const slides = document.querySelectorAll(".test-slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slides.forEach(function (slide, index){
    slide.style.left = `${index * 100}% `;
});

let counter = 0;
nextBtn.addEventListener("click", function(){
    counter++;
    coursel();
});
prevBtn.addEventListener("click", function(){
    counter--;
    coursel();
});

function coursel(){
    //Working with slides
    if(counter === slides.length){
        counter = 0;
    }
    if(counter < 0){
        counter = slides.length -1;
    }


    slides.forEach(function(slide){
        slide.style.transform =  `translateX(-${counter *100 }%)`
    });
};

// Footer

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();