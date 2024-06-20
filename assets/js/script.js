

function autotyping() {
    let elements = document.querySelectorAll('.highlight');
    elements.forEach(element => {
        new Typed(element, {
            strings: ["Joni Halder", "Web Developer"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        });
    });
}
autotyping()
let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.cursor-scale');
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY,
            }
        })
    }
});

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

cursorScale.forEach(link => {
    link.addEventListener('mousemove', () => {

    });

    link.addEventListener('mouseleave', () => {

    });
})
// darkmod and light mode
function darkTheme() {

    document.addEventListener("DOMContentLoaded", () => {
        const check = document.querySelector("#check");
        const ball = document.querySelector(".ball");
        const body = document.body;

        // Function to apply theme
        const applyTheme = (theme) => {
            if (theme === "dark") {
                document.body.classList.add("dark-theme");
                check.checked = true;
            } else {
                document.body.classList.remove("dark-theme");
                check.checked = false;
            }
        };

        // Get theme from localStorage and apply it
        const savedTheme = localStorage.getItem("theme");
        applyTheme(savedTheme);

        // Event listener for checkbox change
        check.addEventListener("change", () => {
            if (check.checked) {
                ball.classList.add("active-toggle");
                localStorage.setItem("theme", "dark");
                applyTheme("dark");
            } else {
                ball.classList.remove("active-toggle");
                localStorage.setItem("theme", "light");
                applyTheme("light");
            }
        });
    });
}

darkTheme()

function hamburger() {
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

}

hamburger()
function bannersectionAnimation() {
    gsap.from(".info", {
        x: 700,
        opacity: 0,
        duration: 0.5,
    })
    gsap.from(".profile", {
        opacity: 0,
        scale: 0,
        duration: 0.5,

    })
}
bannersectionAnimation()




// gsap.from(".nav-items ul li a ", {
//     y: 100,
//     // opacity: 0,
//     duration: 1,
//     stagger: 0.3,
// });





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




let tl = gsap.timeline()

tl.from(".about-left-part", {
    x: -700, // Move 200 pixels horizontally
    // rotation: 360, // Rotate 360 degrees
    duration: 0.5, // Animation duration
    scrollTrigger: {
        trigger: ".about-left-part", // Element to be triggered
        start: "top 50%", // Start trigger when top of trigger element hits the middle of the viewport
        end: "bottom 70%", // End trigger when bottom of trigger element hits the middle of the viewport
        scrub: 2, // Smooth scrolling effect
        // markers: true // Adds markers for debugging
    }
});

    tl.from(".about-right-part", {

        opacity: 0,
        scale: 0,
        duration: 0.5,
        duration: 0.5, // Animation duration
        scrollTrigger: {
            trigger: ".about-right-part", // Element to be triggered
            start: "top 50%", // Start trigger when top of trigger element hits the middle of the viewport
            end: "bottom 70%", // End trigger when bottom of trigger element hits the middle of the viewport
            scrub: 3, // Smooth scrolling effect
            // markers: true // Adds markers for debugging
        }
    });



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
    // Active
    item.addEventListener("click", () => {
        items.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");

        // Filter
        const valueAttr = item.getAttribute("data-filter");
        projectSce.forEach((item) => {
            item.style.display = "none";
            if (
                item.getAttribute("data-filter").toLowerCase() ==
                valueAttr.toLowerCase() ||
                valueAttr == "all"
            ) {
                item.style.display = "flex";
            }
        });
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




document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const projects = document.querySelectorAll('.project-card');

        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                gsap.fromTo(project, { x: '100%', opacity: 0 }, { duration: 0.5, x: '0%', opacity: 1, display: 'flex' });
            } else {
                gsap.to(project, { duration: 0.5, opacity: 0, display: 'none' });
            }
        });
    });
});


let valueElement = document.getElementById('value');
let percentage = 1;

const incrementPercentage = () => {
    if (percentage < 100) {
        percentage++;
        valueElement.textContent = percentage + '%';
        setTimeout(incrementPercentage, 10); // Adjust the timeout for speed control
    } else {
        valueElement.textContent = '100%';
    }
}

setTimeout(incrementPercentage, 10);


