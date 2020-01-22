$(document).foundation();

$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        captions: true,
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 300,
        pager: false,
        slideMargin: 10,
        onSliderLoad: function() {
          $('.bx-wrapper').css("margin", "0 auto");
          $('.carousel-image').css("height", "auto");
          $('.carousel-image').css("width", "100%");
          $('.bx-prev').css("left", "-60px");
          $('.bx-next').css("right", "-60px");
          $('.bx-caption').css("background-color","#1D7BB6");
          $('.bx-caption').css("height","100px");
          $('.bx-caption').css("text-align","center");
          $('.bx-caption span').css("font-size","16px");
          $('.bx-viewport').css("height","300px");
          $('.bxslider').children().css("height", "300px");
        }
    });

    $('.park-filter').on("click", function() {
      $('.park-ticket').hide();
      $('.park-filter').css('opacity', '0.5');
    });

    $('.ski-filter').on("click", function() {
      $('.ski-ticket').hide();
      $('.ski-filter').css('opacity', '0.5');
    });

    $('.attraction-filter').on("click", function() {
      $('.attraction-ticket').hide();
      $('.attraction-filter').css('opacity', '0.5');
    });

    $('.clear-filter').on('click', function() {
      $('.park-ticket').hide();
      $('.ski-ticket').hide();
      $('.attraction-ticket').hide();
      $('.park-filter').css('opacity', '0.5');
      $('.ski-filter').css('opacity', '0.5');
      $('.attraction-filter').css('opacity', '0.5');
    })
});
