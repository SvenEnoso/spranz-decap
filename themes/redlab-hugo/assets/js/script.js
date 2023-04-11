(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  navigation
  $(window).scroll(function () {
    if ($('.nav-js-target').offset().top > 1) {
      $('.nav-js-target').addClass('nav-bg-scroll');
    } else {
      $('.nav-js-target').removeClass('nav-bg-scroll');
    }
  });


  //  Search Form Open
  // $('#searchOpen').on('click', function () {
  //   $('.search-wrapper').addClass('open');
  //   setTimeout(function () {
  //     $('.search-box').focus();
  //   }, 400);
  // });
  // $('#searchClose').on('click', function () {
  //   $('.search-wrapper').removeClass('open');
  // });


  // safety standards slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // match height
  $(function () {
    $('.match-height').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  // Magnific Popup Image
  $('.popup-image').magnificPopup({
    type: 'image',
    titleSrc: 'title',
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: true,
    fixedBgPos: true,
    gallery: {
      enabled: true,
      preload: [0, 2], // read about this option in next Lazy-loading section
      navigateByImgClick: true,
      arrowMarkup: '<button type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
    }
  });


  
	/* ----------------------------------------------------------- */
  /*  Slick Carousel Products
  /* ----------------------------------------------------------- */

  $('.slider-wrap-products').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 4000,
    loop: true,
    autoplay: true,
	dots: false,
	prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
	nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

	/* ----------------------------------------------------------- */
  /*  Slick Carousel Product Categories
  /* ----------------------------------------------------------- */

$('.slider-wrap-productCategories').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplaySpeed: 4000,
  loop: true,
  autoplay: true,
dots: false,
prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

})(jQuery);