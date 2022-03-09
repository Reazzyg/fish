//Мобильное меню
var menuButton = document.querySelector('.header-menu__burger');
menuButton.addEventListener('click', function () {
  document
    .querySelector('.header-menu-mobile')
    .classList.toggle('header-menu-mobile-active');
});
var menuClose = document.querySelector('.header-menu__close');
menuClose.addEventListener('click', function () {
  document
    .querySelector('.header-menu-mobile-active')
    .classList.toggle('header-menu-mobile-active');
});

//Кнопка наверх

(function () {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(1, -40);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

//Плавный скролл
document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.header').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

//закрытие мобильного меню при клике

const navLink = document.querySelectorAll('.header-link-mobile');
function linkAction() {
  const navMenu = document.querySelector('.header-menu-mobile');
  navMenu.classList.remove('header-menu-mobile-active');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// анимация меню при скроле(полоска под активным пунктом меню)

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 70;
    var sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      var headerLink = document.querySelector(
        '.header-list a[href*=' + sectionId + ']'
      );
      headerLink.classList.add('header-link-active');
    } else {
      document
        .querySelector('.header-list a[href*=' + sectionId + ']')
        .classList.remove('header-link-active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

//инициализация AOS анимации
AOS.init();
