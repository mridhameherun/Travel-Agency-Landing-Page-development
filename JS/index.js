$(document).ready(function () {
    const percent = 40;
    $('#progressBar').css('width', percent + '%');
    $('#progressPercent').text(percent + '%');
  });

  $(document).ready(function() {
  function animateOnScroll() {
    $('[data-animate]').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      // Check if element is in viewport
      if (elementBottom > viewportTop + 100 && elementTop < viewportBottom - 100) {
        $(this).addClass('animate');
      }
    });
  }

  // Run on page load and scroll
  animateOnScroll();
  $(window).on('scroll', animateOnScroll);
});
