$(function () {
  var swiper2 = new Swiper(".product-category-h .slider-tab-p", {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 1,
    freeMode: true,
    watchSlidesProgress: true,
    spaceBetween:10,
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1"
    },
  });
  var swiper3 = new Swiper(".product-category-h .slider-product-p", {
    loop: true,
    slidesPerView: 5,
    spaceBetween:24,
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2"
    },
    thumbs: {
      swiper: swiper2,
    },
  });
  var swiper4 = new Swiper(".slider-review-customer", {
    loop: true,
    slidesPerView: 3,
    spaceBetween:30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
  var swiper5 = new Swiper(".slider-blog-news", {
    loop: true,
    slidesPerView: 2,
    spaceBetween:30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
  var swiper6 = new Swiper(".product-hataco-slider", {
        initialSlide: 3,
        cssMode: false,
        paginationClickable: true,
        slidesPerView: 6,
                spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
  $('#select-tab-topic').select2(
    {
      placeholder: "Chủ đề",
      minimumResultsForSearch: -1,
      dropdownParent: $('.filter-item-qa-result-1'),
    }
  );
  $('#select-tab-topic-2').select2(
    {
      placeholder: "Chủ đề",
      minimumResultsForSearch: -1,
      dropdownParent: $('.filter-item-qa-result-3'),
    }
  );
  $(".menu-item-has-children")
    .on("mouseover", function () {
      $(this).children('.sub-menu').addClass('active')
    })
    .on("mouseout", function () {
      $(this).children('.sub-menu').removeClass('active')
    });

  $(".menu-aside .menu-item-has-children").append('<div class="icon"><img src="/wp-content/themes/nwstheme/assets/images/arrow-down-s-fill.svg" alt=""></div>')
  $(".menu-aside .menu-item-has-children .icon").on('click', function () {
    $(this).siblings('.sub-menu').slideToggle()
  })

  $('#btn-hamburger').on('click', function () {
    $('.menu-aside-page').toggleClass('show')
    $('body').addClass('overflow-hidden')
  })
  // menu sp
  $('.menu-aside-page .sub-menu').hide();
  $('.menu-aside-page .icon').on('click', function () {
    $(this).parents('.has-child').siblings('.sub-menu').slideToggle()
  })

  $('.backdrop , .menu-aside-close, .menu-aside-page a').on('click', function () {
    $('.menu-aside-page').removeClass('show')
    $('body').removeClass('overflow-hidden')
    $('.menu-aside-page .sub-menu').hide()
  })

  $("#groupForm").select2({
    minimumResultsForSearch: -1,
    placeholder: 'Select',
    dropdownParent: $('form'),
  });

  $("#topicForm").select2({
    minimumResultsForSearch: -1,
    placeholder: 'Select',
    dropdownParent: $('form'),
  });

    $('.item__guide').on('click', function () {
        $('body').addClass('overflow-hidden')
        $('#guideModal').addClass('show')
    })

    $('.item__initiative').on('click', function () {
        $('body').addClass('overflow-hidden')
        $('#initiativeModal').addClass('show')
    })

    $('.item__topic').on('click', function () {
        $('body').addClass('overflow-hidden')
        $('#topicModal').addClass('show')
    })

    $('#questionModal .btn').on('click', function () {
        $('body').addClass('overflow-hidden')
        $('#sendSuccess').addClass('show')
    })

    $('.popup-backdrop, .popup-child .close, btn-done').on('click', function () {
        $('body').removeClass('overflow-hidden')
        $('#guideModal').removeClass('show')
        $('#initiativeModal').removeClass('show')
        $('#topicModal').removeClass('show')
        $('#sendSuccess').removeClass('show')
    })

    document.getElementById("chooseFile").onchange = function () {
        document.getElementById("chooseFile").value = this.value.replace("C:\\fakepath\\", "");
    };

    $('#chooseFile').bind('change', function () {
        var filename = $("#chooseFile").val();
        if (/^\s*$/.test(filename)) {
            $(".file-upload").removeClass('active');
            $("#noFile").text("No file chosen...");
        }
        else {
            $(".file-upload").addClass('active');
            $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
        }
    });
});
(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:992px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );


	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }
  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function() {

    mySwiper = new Swiper ('.list-concepts-main', {

      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      spaceBetween: 16,
      // pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
        }
      }

    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})(); /* IIFE end */
(function() {

  mySwiper = new Swiper ('.list-concepts-popup', {

      loop: true,
      slidesPerView: 1,
      centeredSlides: false,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      spaceBetween: 16,
      // pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
        }
      }

    });
})(); /* IIFE end */
$(".filter-calendar-result-qa").on('click', function(){
  $(this).addClass("active");
});
$(function () {

  // update locale to de and customize the MMM, MMMM translation
  moment.updateLocale("de", {
      months : ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
      monthsShort : ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez']
  });
  $('input[name="daterange"]').daterangepicker({
      "opens": "center",
      "maxSpan": {
          "days": 366
      },
      autoUpdateInput: false,
      "parentEl":".card-result-qa-header",
      locale: {
          cancelLabel: 'Clear',
          applyLabel: tc('Apply'),
          customRangeLabel: tc('Custom Range'),
          daysOfWeek: [
              tc('Su'), tc('Mo'), tc('Tu'), tc('We'), tc('Th'), tc('Fr'), tc('Sa')
          ],
          monthNames: [
              tc('January'), tc('February'), tc('March'), tc('April'), tc('May'), tc('June'), 
              tc('July'), tc('August'), tc('September'), tc('October'), tc('November'), tc('December')
          ],
          firstDay: 1
      },
      // ranges: ranges_locale(currentLanguage),
      "alwaysShowCalendars": true,
      // "startDate": today, //target.attr('start-date'),
      // "endDate": target.attr('end-date'),
  });
})