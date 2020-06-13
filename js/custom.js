    $( document ).ready(function() {
      var $document = $(document),
        $element = $('.kicko_nav'),
        className = 'kicko_nav_bg';
      function navbg(){
        if ($document.scrollTop() >= 300) {
          $element.addClass(className);
        } else {
          $element.removeClass(className);
        }
      }
      navbg();

      $document.scroll(function() {
        navbg();
      });

      $('.about_video img').click(function(){
        $('#about_video_modal').modal('show');
      })

      $('.navbar-toggle').click(function(){
        $(this).toggleClass('cross');
      });
    });

    /*WOW Animation init*/
    new WOW().init();


    /*Message Send Script*/
    $('#contact_form').submit(function(e){
      e.preventDefault()
      $.ajax({
        url: "sendmail.php",
        type: "POST",
        data: $('#contact_form').serialize(),
        success: function (data) {
          //console.log(data);
          $('#sendmail_message').html(data);
        }
      });
    });


    /*Smooth Scrool*/
    $('.kicko_nav a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });