new Swiper('.image-slider', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // autoHeight: true,
  spaceBetween: 40,
  slidesPerGroup: 3,
  // centeredSlides: true
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    1500: {
      slidesPerView: 3,
    },
  }
});
