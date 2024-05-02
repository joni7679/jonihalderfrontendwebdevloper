
function locoAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();


}

// locoAnimation()






// darkmod and light mode
let check = document.querySelector("#check");
let box = document.querySelector(".box");
let ball = document.querySelector(".ball");

// Set default theme if not already set
if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
}

// Function to set theme based on data in localStorage
// function setTheme() {
//     let theme = localStorage.getItem("theme");
//     if (theme === "dark") {
//         document.body.classList.add("dark-theme");
//         check.checked = true;
//         box.setAttribute("style", "background-color:black");
//         ball.classList.add("active-toggle");
//     } else {
//         document.body.classList.remove("dark-theme");
//         check.checked = false;
//         box.setAttribute("style", "background-color:white");
//         ball.classList.remove("active-toggle");
//     }
// }

// // Initial call to set the theme when the page loads
// setTheme();

// Event listener for theme toggle
// check.addEventListener("change", () => {
//     if (check.checked) {
//         document.body.classList.add("dark-theme");
//         // localStorage.setItem("theme", "dark");
//         box.setAttribute("style", "background-color:black");
//         ball.classList.add("active-toggle");
//     } else {
//         document.body.classList.remove("dark-theme");
//         // localStorage.setItem("theme", "light");
//         box.setAttribute("style", "background-color:white");
//         ball.classList.remove("active-toggle");
//     }
// });



var getHubergerIcon = document.getElementById("hamburger-menu");
var getHubergerCrossIcon = document.getElementById("hamburger-cross");
var getMobileMenu = document.getElementById("mobile-menu");

getHubergerIcon.addEventListener("click", function () {
    console.log("hello");
    getMobileMenu.style.display = "flex";
    setTimeout(function () {
        getMobileMenu.style.transform = "translateX(0%)"; // Slide in the menu
    }, 50); // Add a small delay for better transition effect
});

getHubergerCrossIcon.addEventListener("click", function () {
    console.log("hello");
    getMobileMenu.style.transform = "translateX(-100%)"; // Slide out the menu
    setTimeout(function () {
        getMobileMenu.style.display = "none";
    }, 300); // Wait for the transition to end before hiding
});

// Check if screen size changes to desktop view and hide mobile menu
window.addEventListener("resize", function () {
    if (window.innerWidth > 770) {
        getMobileMenu.style.display = "none";
    }
});
const inputBoxes = document.querySelectorAll('.inputbox');
const placeholders = document.querySelectorAll('.placeholder');
inputBoxes.forEach(function (inputBox, index) {
    inputBox.addEventListener('focus', function () {
        placeholders[index].classList.add('active');
        inputBoxes[index].classList.add('inputactive');
    });

    inputBox.addEventListener('blur', function () {
        if (inputBox.value === '') {
            placeholders[index].classList.remove('active');
            inputBoxes[index].classList.remove('inputactive');

        }
    });
});



let tl = gsap.timeline()

tl.from("nav ul li ", {
    y: -600,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
});

tl.from(".bannner-tittle", {
    x: -700,
    opacity: 0,
    duration: 0.5,
})


// tl.from(".about-left", {
//     x: -700, // Move 200 pixels horizontally
//     // rotation: 360, // Rotate 360 degrees
//     duration: 2, // Animation duration
//     scrollTrigger: {
//         trigger: ".about-left", // Element to be triggered
//         start: "top 50%", // Start trigger when top of trigger element hits the middle of the viewport
//         end: "bottom 50%", // End trigger when bottom of trigger element hits the middle of the viewport
//         scrub: true, // Smooth scrolling effect
//         // markers: true // Adds markers for debugging
//     }
// });



let portfolio = document.getElementById("portfolio");
portfolio.addEventListener("click", (event) => {
    console.log(event.target)
    let currentimgpath = event.target.src;
    console.log(currentimgpath)


})


tl.from(".project", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".portfolio-section",
        scroller: "body",
        start: "top top",
        end: "bottom 80%",
        scrub: 2,
        // markers: true,
    }
});





let mainContainer = document.querySelector(".cricle");
let skills = document.querySelectorAll(".sec");

skills.forEach((skill, index) => {
    skill.addEventListener("click", () => {
        let mainRotation = -index * 50; // Calculate the rotation angle for the main container
        gsap.to(mainContainer, { rotate: mainRotation, duration: 0.5 }); // Smoothly rotate the 
    });
});