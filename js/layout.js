$(document).ready(function() {
	 function toggleElementsOnScroll(){
    
        /* Check the location of each desired element */
        $('.show-on-scroll').not('.visible').each( function(i){
            var top_of_object = $(this).position().top + 100,
            	bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){
                $(this).addClass('visible');
            	$(this).find(".cheese").smilify();
            }
        }); 
    
    }

    $(window).scroll(toggleElementsOnScroll);
    toggleElementsOnScroll();
	$(".cheese").not('.show-on-scroll .cheese').smilify();
});