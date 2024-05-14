






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

tl.from(".devloper-img", {
    opacity: 0,
    scale: 0,
    duration: 0.5,

})



// tl.from(".primary-color", {
// y:100,
// opener:0,
// scrollTrigger:{
//     trigger:".portfolio-section",
//     scroller:"body",
//     markers: true,
//     start: "top top",
//     end: "bottom 50%",
//     scrub: 3,
// }
// })

tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    // delay: 1,
    // skewY: 7,
    scrollTrigger: {
        trigger: ".line",
        scroller: "body",
        // markers: true,
        start: "50% 50%",
        end: "bottom 50%",
        scrub: 3,
    },
    stagger: {
        amount: 0.3
    },
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


// function skillHeadingFunction() {
//     let text = '';
//     let skillHeading = document.querySelector(".skill-heading-text");
//     skillHeading.textContent.split("").forEach((e) => {
//         text += `<span>${e}</span>`;
//     })
//     skillHeading.innerHTML = text;
//     let tl = gsap.timeline();
//     tl.from(".skill-heading-text span", {
//         y: 100,
//         opacity: 0,
//         duration: 0.1,
//         scrollTrigger: {
//             trigger: ".skill-heading-text", // Corrected selector
//             scroller: 'body',
//             start: "top 70%%",
//             end: "bottom 90%",
//             scrub: 2,
//             markers: true,
//         },
//         stagger: 0.2, // Adding stagger effect
//     })
// }

// skillHeadingFunction();

// 






function projectShowCaseAni() {
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

}

projectShowCaseAni()

const items = document.querySelectorAll("ul li");
const projectSce = document.querySelectorAll(".portfolio .project");

items.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove active class from all items
        items.forEach((menuItem) => {
            menuItem.classList.remove("active");
        });
        item.classList.add("active");

        // // Filter
        // const valueAttr = item.getAttribute("data-filter");
        // projectSce.forEach((projectItem) => {
        //     projectItem.classList.add("hide"); // Hide all projects by default
        //     if (
        //         projectItem.getAttribute("data-filter").toLowerCase() ==
        //         valueAttr.toLowerCase() ||
        //         valueAttr == "all"
        //     ) {
        //         projectItem.classList.remove("hide");
        //     }
        // });
    });
});








let mainContainer = document.querySelector(".cricle");
let skills = document.querySelectorAll(".sec");

skills.forEach((skill, index) => {
    skill.addEventListener("click", () => {
        let mainRotation = -index * 50; // Calculate the rotation angle for the main container
        gsap.to(mainContainer, { rotate: mainRotation, duration: 0.5 }); // Smoothly rotate the 
    });
});