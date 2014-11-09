/*
* Blurs an element with CSS3 blur filter
* with given parameters
*
* Requires jQuery.
*
* @author Jani Anttonen
*/

function scrollBlur(){

    // Element which is getting the blur treatment
    var curtain = $("#curtain");

    // Amount of pixels where blur reaches the desired value
    var stop = 260;

    // Blur amount in pixels at 100%
    var blurFull = 20;

    // Value in pixels how far the page has been scrolled
    var position = $(document).scrollTop();

    // Calculated real time blur amount at position
    var blurAmount = (stop>position) ? position / stop * blurFull : blurFull;

    // Calculated real time zoom amount at position (to hide the underlying background color)
    var backGroundZoomAmount = (stop>position) ? position / stop * blurFull + 100 : blurFull + 100;

    /* -------------------------
       Where the magic happens
     --------------------------*/
    curtain.css("transform","scale(" + (backGroundZoomAmount/100) + ")");
    curtain.css("filter","blur(" + blurAmount + "px)");
    curtain.css("-webkit-filter","blur(" + blurAmount + "px)");
    curtain.css("-mozilla-filter","blur(" + blurAmount + "px)");

}

// Call the function on page load
$(function(){scrollBlur();})

// Call the function when page is scrolled
$(document).scroll(function(){scrollBlur();});