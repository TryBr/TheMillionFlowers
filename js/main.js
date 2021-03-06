$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 500,
        navigation: true,
        pagination: false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
        navigationText: false
    });

    sync2.owlCarousel({
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900, 0], // betweem 900px and 601px
        itemsTablet: [600,0 ], //2 items between 600 and 0
        itemsMobile : [400, 0], // itemsMobile disabled - inherit from itemsTablet option
        pagination:false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
            center(current)
        }
    }

    $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
    });

    function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
            if(num === sync2visible[i]){
                var found = true;
            }
        }

        if(found===false){
            if(num>sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", num - sync2visible.length+2)
            }else{
                if(num - 1 === -1){
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if(num === sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
            sync2.trigger("owl.goTo", num-1)
        }

    }

});


$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

$(document).ready(function() {
 
  $(".cart-addition").owlCarousel({

      items : 4,
      navigation : true,
      navigationText: false,
      pagination: false
  });
 
});

$(document).ready(function() {

$( ".spinner" ).spinner();

});

$(document).ready(function() {
  $('#deliverty-date').datetimepicker({
      locale: 'ru',
      format: 'DD/MM/YYYY'
  });

  $('#deliverty-time').datetimepicker({
      locale: 'ru',
      format: 'LT'
  });
});


//animation effects
new WOW().init();

jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});


//masked input
$(document).ready(function() {
 
  $(".phone__field").mask("+7 (999)-999-99-99");
 
});



//Give Another Check
$('#giveAnother').click(function(){
    if (this.checked) {
      $('.giveAnother__field').attr('disabled', false);
      $('.giveAnother__field').removeClass('disabled');
      $('.giveAnother__field').addClass('enabled');
      $('.required').attr('required', true);
    } else {
      $('.giveAnother__field').attr('disabled', true);
      $('.giveAnother__field').removeClass('enabled');
      $('.giveAnother__field').addClass('disabled');
      $('.required').attr('required', false);
    }
});