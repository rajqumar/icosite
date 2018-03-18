$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
     
      });
    } // End if
  });
  
 });
 
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#application').offset().top;
    if (window_top > div_top) {
      $("#app_pro").addClass('active');
       $("#eli_calc, #tes, #help, #products").removeClass('active');
       $(".fm1").show();
       $(".fm2, .fm3, .fm4, .fm5").hide();
    } else {
      
    }
  
   var div_top1 = $('#eligiblity').offset().top;
    if (window_top > div_top1) {
      $("#eli_calc").addClass('active');
       $("#app_pro, #tes, #help, #products").removeClass('active');
      $(".fm2").show();
      $(".fm1, .fm3, .fm4, .fm5").hide();
    } else {
      
    }
    
     var div_top4 = $('#product_covered').offset().top;
    if (window_top > div_top4) {
       $("#products").addClass('active');
       $("#app_pro, #tes, #eli_calc, #help").removeClass('active');
       $(".fm5").show();
       $(".fm2, .fm3, .fm1, .fm4").hide();
    } else {
      
    }
    
     var div_top2 = $('#testimonial').offset().top;
    if (window_top > div_top2) {
      $("#tes").addClass('active');
       $("#app_pro,#eli_calc, #help, #products").removeClass('active');
       $(".fm3").show();
       $(".fm2, .fm1, .fm4, .fm5").hide();
    } else {
      
    }
    
     var div_top3 = $('#helps').offset().top;
    if (window_top > div_top3) {
      $("#help").addClass('active');
         $("#app_pro, #tes, #eli_calc, #products").removeClass('active');
         $(".fm4").show();
         $(".fm2, .fm3, .fm1, .fm5").hide();
    } else {
      
    }
    
    
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

//script to create sticky header 
jQuery(function(){
    createSticky(jQuery("#sticky-menu"));
});

function createSticky(sticky) {
    if (typeof sticky != "undefined") {

        var pos = sticky.offset().top ,
            win = jQuery(window);

        win.on("scroll", function() {

            if( win.scrollTop() > pos ) {
                sticky.addClass("fx_menu");
            } else {
                sticky.removeClass("fx_menu");
            }           
        });         
    }
}


