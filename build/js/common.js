$(document).ready(function () {
  // alert(1);
  $('.header__hamburger').click(function () {
    $(this).toggleClass('open');
    $('.header__menu-inner').toggleClass('open');
  })
  $('.header__search-icon').click(function () {
    // $(this).toggleClass('open');
    $('.search-popup').addClass('open');
  })
  $('.search-popup__close-btn').click(function () {
    // $(this).toggleClass('open');
    $('.search-popup').removeClass('open');
  })

  $('.hr-bank__slider').owlCarousel({
    loop: false,
    dots: false,
    nav: true,
    navText: ['', ''],
    items: 6,
    slideBy: 6,
    autoWidth: true
  });

  if ($('.hr-choise__slider').length) {
    let owl_choise = $('.hr-choise__slider');

    if ($(window).width() > 573) {
      startCarousel(owl_choise);
    } else {
      owl_choise.addClass('off');
    }
    $(window).resize(function () {
      if (typeof owl_choise == "undefined") {
        if ($(window).width() > 573) {
          startCarousel(owl_choise);
        } else {
          stopCarousel(owl_choise);
        }
      }
    });
    function startCarousel(owl_choise) {
      owl_choise.owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        navText: ['', ''],
        items: 2,
        slideBy: 2,
        autoWidth: true
      });
    }
    function stopCarousel(owl_choise) {
      // var owl = $('.owl-carousel');
      owl_choise.trigger('destroy.owl.carousel');
      owl_choise.addClass('off');
    }
  }

  $('.single_slider').owlCarousel({
    loop: false,
    dots: false,
    nav: true,
    navText: ['', ''],
    items: 3,
    slideBy: 3,
    margin: 25,
    autoWidth: true
  });
  // Select
  $('.select').each(function () {
    // Variables
    var $this = $(this),
      selectOption = $this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      dur = 500;
    let datatext = $this.data('placeholder');

    $this.hide();
    // Wrap all in select box
    $this.wrap('<div class="select"></div>');
    // Style box
    $('<div>', {
      class: 'select__gap',
      text: datatext
    }).insertAfter($this);

    var selectGap = $this.next('.select__gap'),
      caret = selectGap.find('.caret');
    // Add ul list
    $('<ul>', {
      class: 'select__list'
    }).insertAfter(selectGap);

    var selectList = selectGap.next('.select__list');
    // Add li - option items
    for (var i = 0; i < selectOptionLength; i++) {
      $('<li>', {
        class: 'select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
    // Find all items
    var selectItem = selectList.find('li');

    selectList.slideUp(0);
    selectGap.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(dur);

        selectItem.on('click', function () {
          var chooseItem = $(this).data('value');
          selectItem.removeClass('selected');
          $(this).addClass('selected');
          $('select').val(chooseItem).attr('selected', 'selected');
          selectGap.text($(this).find('span').text());
          selectGap.addClass('bolder');

          selectList.slideUp(dur);
          selectGap.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(dur);
      }
    });

  });

});
