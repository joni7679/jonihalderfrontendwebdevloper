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


const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

