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