$(function () {
 $(".play-video-slider").click(function () {
  $(this).siblings('.video-slider').get(0).play();
  $(this).addClass('active');
 });
 var swiper2 = new Swiper(".product-category-h .slider-tab-p", {
  loop: true,
  loopedSlides: 1,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 1,
  freeMode: true,
  watchSlidesProgress: true,
  spaceBetween: 10,
  slideToClickedSlide: true,
  navigation: {
   nextEl: ".swiper-button-next-1",
   prevEl: ".swiper-button-prev-1",
  },
  breakpoints: {
    768: {
      slidesPerView: 7,
      spaceBetween: 1,
    },
  },
 });
 var swiper3 = new Swiper(".product-category-h .slider-product-p", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  navigation: {
   nextEl: ".swiper-button-next-2",
   prevEl: ".swiper-button-prev-2",
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
   },
  thumbs: {
   swiper: swiper2,
  },
 });
 var swiper4 = new Swiper(".slider-review-customer", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
   el: ".swiper-pagination",
   clickable: true,
  },
  breakpoints: {
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    576: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
  },
 });
 var swiper5 = new Swiper(".slider-blog-news", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
   el: ".swiper-pagination",
   clickable: true,
  },
 });
 var swiper6 = new Swiper(".product-hataco-slider", {
  initialSlide: 3,
  cssMode: false,
  paginationClickable: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
 });
 var swiper7 = new Swiper(".slider-video-hataco", {
  initialSlide: 3,
  cssMode: false,
  paginationClickable: true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
   nextEl: ".swiper-button-next-3",
   prevEl: ".swiper-button-prev-3",
  }
 });
 $(".menu-item-has-children")
  .on("mouseover", function () {
   $(this).children(".sub-menu").addClass("active");
  })
  .on("mouseout", function () {
   $(this).children(".sub-menu").removeClass("active");
  });

 $(".menu-aside .menu-item-has-children").append(
  '<div class="icon"><img src="/wp-content/themes/nwstheme/assets/images/arrow-down-s-fill.svg" alt=""></div>'
 );
 $(".menu-aside .menu-item-has-children .icon").on("click", function () {
  $(this).siblings(".sub-menu").slideToggle();
 });

 $("#btn-hamburger").on("click", function () {
  $(".menu-aside-page").toggleClass("show");
  $("body").addClass("overflow-hidden");
 });
 // menu sp
 $(".menu-aside-page .sub-menu").hide();
 $(".menu-aside-page .icon").on("click", function () {
  $(this).parents(".has-child").siblings(".sub-menu").slideToggle();
 });

 $(".backdrop , .menu-aside-close, .menu-aside-page a").on(
  "click",
  function () {
   $(".menu-aside-page").removeClass("show");
   $("body").removeClass("overflow-hidden");
   $(".menu-aside-page .sub-menu").hide();
  }
 );

 $("#groupForm").select2({
  minimumResultsForSearch: -1,
  placeholder: "Select",
  dropdownParent: $("form"),
 });

 $("#topicForm").select2({
  minimumResultsForSearch: -1,
  placeholder: "Select",
  dropdownParent: $("form"),
 });

 $(".item__guide").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#guideModal").addClass("show");
 });

 $(".item__initiative").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#initiativeModal").addClass("show");
 });

 $(".item__topic").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#topicModal").addClass("show");
 });

 $("#questionModal .btn").on("click", function () {
  $("body").addClass("overflow-hidden");
  $("#sendSuccess").addClass("show");
 });

 $(".popup-backdrop, .popup-child .close, btn-done").on("click", function () {
  $("body").removeClass("overflow-hidden");
  $("#guideModal").removeClass("show");
  $("#initiativeModal").removeClass("show");
  $("#topicModal").removeClass("show");
  $("#sendSuccess").removeClass("show");
 });

 document.getElementById("chooseFile").onchange = function () {
  document.getElementById("chooseFile").value = this.value.replace(
   "C:\\fakepath\\",
   ""
  );
 };

 $("#chooseFile").bind("change", function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
   $(".file-upload").removeClass("active");
   $("#noFile").text("No file chosen...");
  } else {
   $(".file-upload").addClass("active");
   $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
  }
 });
});
