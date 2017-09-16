$(function() {
  var duration = 5000;
  var male_amount = 10; // the number of male tickets
  var female_amount = 10; // the number of female tickets
  var male_draws = ['#/draw1', '#/draw3', '#/draw5', '#/draw7']
  var female_draws = ['#/draw2', '#/draw4', '#/draw6', '#/draw8']

  var anchor = document.location.hash;
  $(window).bind( 'hashchange', function(e) {

          male_amount = $("input[name=male]").val(); // the number of male tickets
          female_amount = $("input[name=female]").val(); // the number of female tickets

          anchor = document.location.hash;
          // In the fourth slide, we have the activity counter.
          if( $.inArray(anchor, male_draws) > -1 ) {

              $( "body" ).animate({
                backgroundColor: "rgb(86, 42, 134)",
              }, 1000 );

              var random = Math.round(Math.random() * male_amount)
              console.log(random)
             $(anchor.replace("/", "")+"-counter").show(); // It's hidden by default.
             $({c:0}).animate({c:random}, {
                  step: function(now) {
                      $(anchor.replace("/", "")+"-counter").text(Math.round(now))
                  },
                  duration: duration + random/100, // The counter should finish in seconds.
                  easing: "linear",
                  complete: function() {
                      $(anchor.replace("/", "")+"-counter").css('padding-bottom','0');
                      $(anchor.replace("/", "")+"-text").show();
                      $(anchor.replace("/", "")+"-text").addClass('animated bounceInRight');
                  } // Run this when the animation is finished.
              });
          }
          else if( $.inArray(anchor, female_draws) > -1 ) {

              $( "body" ).animate({
                backgroundColor: "rgb(200, 0, 124)",
              }, 1000 );

              var random = Math.round(Math.random() * female_amount)
              console.log(random)
             $(anchor.replace("/", "")+"-counter").show(); // It's hidden by default.
             $({c:0}).animate({c:random}, {
                  step: function(now) {
                      $(anchor.replace("/", "")+"-counter").text(Math.round(now))
                  },
                  duration: duration + random/100, // The counter should finish in seconds.
                  easing: "linear",
                  complete: function() {
                      $(anchor.replace("/", "")+"-counter").css('padding-bottom','0');
                      $(anchor.replace("/", "")+"-text").show();
                      $(anchor.replace("/", "")+"-text").addClass('animated bounceInRight');
                  } // Run this when the animation is finished.
              });
          } else {
              $( "body" ).animate({
                backgroundColor: "rgb(17, 31, 70)",
              }, 1000 );
          }
  });

  $(".counter").click(function () {
      var random = Math.round(Math.random() * male_amount)
              console.log(random)
             $(anchor.replace("/", "")+"-counter").show(); // It's hidden by default.
             $({c:0}).animate({c:random}, {
                  step: function(now) {
                      $(anchor.replace("/", "")+"-counter").text(Math.round(now))
                  },
                  duration: duration + random/100, // The counter should finish in seconds.
                  easing: "linear",
                  complete: function() {$(anchor.replace("/", "")+"-counter").css('padding-bottom','0');$(anchor.replace("/", "")+"-text").show();$(anchor.replace("/", "")+"-text").addClass('animated bounceInRight');} // Run this when the animation is finished.
      });
  });
});
