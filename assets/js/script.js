//res
let hamburgerBtn = document.getElementById("menu-btn");
hamburgerBtn.addEventListener("click", () => {
    document.querySelector("nav").style.right = "50%"
})

let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
    document.querySelector("nav").style.right = "200%"

})



// $('.my-sill').slick({
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });


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


tl.from(".about-left", {
    x: -700, // Move 200 pixels horizontally
    // rotation: 360, // Rotate 360 degrees
    duration: 2, // Animation duration
    scrollTrigger: {
        trigger: ".about-left", // Element to be triggered
        start: "top 50%", // Start trigger when top of trigger element hits the middle of the viewport
        end: "bottom 50%", // End trigger when bottom of trigger element hits the middle of the viewport
        scrub: true, // Smooth scrolling effect
        markers: true // Adds markers for debugging
    }
});



let portfolio = document.getElementById("portfolio");
portfolio.addEventListener("click", (event) => {
    console.log(event.target)

    let currentimgpath = event.target.src;
    console.log(currentimgpath)


})