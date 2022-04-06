$(document).ready(function() {
  $('.humburger').click(function() {
    $('header').toggleClass('open');
  });
  $('#mask').click(function() {
    $('header').toggleClass('open');
  });
  $(window).scroll(function() {
    $('.fadein').each(function() {
      let target= $(this).offset().top;
      let scroll= $(window).scrollTop();
      let windowHeigth= $(window).height();
      if(scroll > target - windowHeigth + 200) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    })
  });
  $('a[href^="."]').click(function() {
    let href =$(this).attr('href');
    let target = $(href == '.' || href =="" ? 'html': href);
    let position = target.offset().top;
    $('html, body').animate({scrollTop: position}, 600, 'swing');
    return false;
  });
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});