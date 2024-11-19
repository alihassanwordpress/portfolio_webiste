// Menu open/close
let menu = document.querySelector('.menu-icon');
// let navbar = document.querySelector('.navbar'); // Uncomment if you need this

menu.onclick = () => {
    menu.classList.toggle("move");
};

// Review Swiper
var swiper = new Swiper(".review-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });