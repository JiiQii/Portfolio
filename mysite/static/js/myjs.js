// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//scroll smoth function
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
      }, 700, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//first button
$(document).ready(function() {

   $('#button_to_s2').hover(

      function () {
         $(this).css({"font-size":"100px"});
      },

      function () {
         $(this).css({"font-size":"80px"});
      }
   );

});
$(document).ready(function() {

   $('#pribtn').hover(

      function () {
         $(this).css({"color":"black"});
      },

      function () {
         $(this).css({"color":"gray"});
      }
   );

});
$(document).ready(function() {

   $('#check_btn').hover(

      function () {
         $(this).css({"background-color":"#dcdde2"});
      },

      function () {
         $(this).css({"background-color":"wihte"});
      }
   );

});
$(document).ready(function() {

   $('#check_btn').hover(

      function () {
         $(this).css({"color":"white"});
      },

      function () {
         $(this).css({"color":"black"});
      }
   );

});
$(document).ready(function() {

   $('#s2').hover(

      function () {
         $(this).css({"width":"100%"});
      },

      function () {
         $(this).css({"width":"99%"});
      }
   );

});
$(document).ready(function() {

   $('#s2').hover(

      function () {
         $(this).css({"opacity":"1.0"});
      },

      function () {
         $(this).css({"opacity":"0.95"});
      }
   );

});

// contact form

$(document).ready(function() {
	// Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

						switch(e.type) {
							case 'keyup': {
								 $parent.toggleClass('js-hide-label', $this.val() == '');
							} break;
							case 'blur': {
								if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
							} break;
							case 'focus': {
								if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
							} break;
							default: break;
						}
						// previous implementation with ifs
            /*if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label');
                }
            }
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                }
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            }
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }*/
        });
    }
});
