// /* menu hidden */

// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /* menu show */

// if(navToggle){
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.add('show-menu')
//   })
// }

// if(navClose){
//   navClose.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu')
//   })
// }

/* swiper slide */
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  // centeredSlides: true,
  spaceBetween: 30,
  autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 3000,   // 시간 설정
    disableOnInteraction : true,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
 
});

var appendNumber = 3;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });
  
  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear(); //2021
