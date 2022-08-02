new Swiper('.image-slider', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // autoHeight: true,
  spaceBetween: 10,
  slidesPerGroup: 3,
  // centeredSlides: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    1300: {
      slidesPerView: 3,
    },
  }
});


(function () {
  const burgerItems = document.querySelectorAll('.burger');
  const menu = document.querySelector('.header__nav');
  const menuClosePopup = document.querySelector('.header__nav-close');
  const body = document.querySelector('body');

  burgerItems.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.add('header__nav-active');
      body.style.overflow = 'hidden';
    });
  });

  menuClosePopup.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
    body.style.overflow = '';
  });
}());
