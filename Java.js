$( document ).ready(function() {
  
  const links = document.querySelectorAll('a[href^="#"]');

  // Add a click event listener to each link
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent the default behavior of the link
      e.preventDefault();
  
      // Get the target element
      const target = document.querySelector(this.getAttribute('href'));
  
      // Check if the `scrollIntoView` method is supported
      if (target.scrollIntoView) {
        // If it is supported, use it to smoothly scroll to the target element
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If it is not supported, use the `scrollTop` method with jQuery
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 500, 'linear');
      }
    });
  });

    var taged = $(".NameB");

    for (var i = 0; i < taged.length; i++) {
      var tags = taged[i];
        $(tags).addClass("visible");
    }

    $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var tags = $(".NameB");

        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i];
          if ($(tag).position().top > pageTop / .5) {
            $(tag).addClass("visible");
          } 
          else {
            $(tag).removeClass("visible");
          }
        }
      });
});


