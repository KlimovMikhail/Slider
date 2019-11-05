var slider = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var glide = new Glide('.glide', { autoplay: 2000 }).mount()

glide.pause()

var button = document.querySelector('#api-pause-button')

var glide = new Glide('#api-pause', {
  startAt: 0,
  perView: 3,
  autoplay: 1000
})

// button.addEventListener('click', function () {
//   glide.pause()
// })

// glide.mount()

$('.container-bird').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});