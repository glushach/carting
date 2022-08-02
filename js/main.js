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
