// console.log($)
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0:{
            slidesPerView: 2,
        spaceBetween: 20,
        },
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

$(function(){
    $('#menu-bar').click(function(){
        $('.navlist').slideToggle(1000,function(){
            console.log("Slide toggle done")
        });
    })
})
