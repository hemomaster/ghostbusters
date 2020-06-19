$(document).ready(function () {
  const mMenu = $(".m-menu");
  const mMenuBtn = $(".mob-menu-button");
  const tab = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active-menu");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("activ");
    $(this).toggleClass("activ");
    let actTabConten = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(actTabConten).toggleClass("visible");
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      991: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});
