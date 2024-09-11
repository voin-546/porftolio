// Burger-menyu (Planshet Va telefon versiyalarida ko'rinadi)

burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    header = document.querySelector("header");
    header.classList.toggle("show");
})

// Scroll qilganimida header`ga rang va transition berish

// window.onscroll = function () {
//     if (window.pageYOffset > 150) {
//         let header = document.querySelector("header");
//         header.style.backgroundColor = "#265a6a";
//         header.style.transition = "height .3s, background-color .3s"
//     }
    
// }
window.addEventListener("scroll", () => {
    let backToTop = document.querySelector(".back-to-top");
    if (window.pageYOffset > 630) backToTop.classList.remove("hidden");
    else backToTop.classList.add("hidden")
})