/*
 * Blurs an element with CSS3 blur filter
 * with given parameters
 *
 * Requires jQuery.
 *
 * @author Jani Anttonen
 */
$(document).scroll(function() {

    // Element which sits on top of the blurrable area
    var curtain = $("#curtain");

    // Amount of pixels where blur reaches the desired value
    var stop = 460;
    
    // Blur amount in pixels at 100%
    var blurFull = 10;

    // Value in pixels how far the page has been scrolled
    var position = $(document).scrollTop();

    // Calculated real time blur amount at position
    var blurAmount = (stop>position) ? position / stop * blurFull : blurFull;

    // Calculated real time zoom amount at position
    var backGroundZoomAmount = position / stop * blurFull + 100;

    // Demo text, uncomment in production to see if jQuery is loaded properly
    $( "p:last" ).text( "scrollTop:" + position );

    /* -------------------------
       Where the magic happens
     --------------------------*/
    if(backGroundZoomAmount>=100 && blurAmount<blurFull){
        curtain.css("transform","scale(" + (backGroundZoomAmount/100) + ")");
        curtain.css("filter","blur(" + blurAmount + "px)");
        curtain.css("-webkit-filter","blur(" + blurAmount + "px)");
    }
});