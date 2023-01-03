$( document ).ready(function() {
    
    var taged = $(".NameB");

    for (var i = 0; i < taged.length; i++) {
      var tags = taged[i];
        $(tags).addClass("visible");
    }

    $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
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


