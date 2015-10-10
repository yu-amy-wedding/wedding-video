var SCREEN_WIDTH, buildSlides, gotoSlide;

SCREEN_WIDTH = document.documentElement.clientWidth;

buildSlides = function() {
  var slideCount;
  $('.slide').each(function(ix, slide) {
    return $(slide).addClass('slide').addClass('is-absolute').css({
      top: 0,
      left: "" + (ix * SCREEN_WIDTH) + "px"
    }).css({
      width: "" + SCREEN_WIDTH + "px"
    });
  });
  slideCount = $('.slide').length;
  $('#slide-container').css({
    width: "" + (slideCount * SCREEN_WIDTH) + "px"
  });
  return $('#cloud-container').css({
    width: "" + (slideCount * SCREEN_WIDTH) + "px"
  });
};

gotoSlide = function(slideIndex) {
  var $activeSlide, $slideContainer, $targetSlide, activeSlideNum, currPos, offset, targetSlideNum;
  $activeSlide = $('.slide.active');
  activeSlideNum = parseInt($activeSlide.attr('id').substr(5), 10);
  $targetSlide = $("#slide" + (slideIndex + 1));
  targetSlideNum = parseInt($targetSlide.attr('id').substr(5), 10);
  $slideContainer = $('#slide-container');
  offset = -1 * (targetSlideNum - activeSlideNum) * SCREEN_WIDTH;
  currPos = parseInt($slideContainer.css('left'), 10);
  $slideContainer.transition({
    left: "" + (currPos + offset) + "px"
  }, 500, 'ease');
  $activeSlide.toggleClass('active');
  return $targetSlide.toggleClass('active');
};

buildSlides();