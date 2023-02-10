$( document ).ready(function() {
  
  window.onscroll = function() {
    const navbar = document.querySelector('.navbar-bgoff');
    if (window.pageYOffset > 0) {
      navbar.classList.add('navbar-bgon');
    } else {
      navbar.classList.remove('navbar-bgon');
    }
  };

    const links = document.querySelectorAll('a[href^="#"]');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        } else{
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
  
    hiddenElements.forEach((el) => observer.observe(el));
  
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        } else{
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements2 = document.querySelectorAll('.hidden2');
  
    hiddenElements2.forEach((el) => observer.observe(el));
    
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
            if ($(tag).position().top > pageTop / .15) {
              $(tag).addClass("visible");
            } 
            else {
              $(tag).removeClass("visible");
            }
          }
        });
        
  });
  
  
  