/*
 * Blurs an element with CSS3 blur filter
 * with given parameters
 *
 * Requires jQuery.
 *
 * @author Jani Anttonen
 */

function scrollBlur() {
    'use strict';

    // Element which is getting the blur treatment
    var curtain = $("#curtain"),
        
    // Initialize return variables
        blurAmount,
        backGroundZoomAmount,

    // Amount of pixels where blur reaches the desired value
        stop = 260,

    // Blur amount in pixels at 100%
        blurFull = 20,

    // Value in pixels how far the page has been scrolled
        position = $(document).scrollTop(),
        
    // Curtain element resize
        aspectRatio = 16 / 9,
        windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        
    // Calculates the position of the background image
        positionLeft = Math.min(0, (windowWidth - curtain.width()) / 2),
        positionTop = Math.min(0, (windowHeight - curtain.height()) / 2);

    // Stop the calculations on Apple-y overflow effects
    if (position >= 0) {

        // Calculated real time blur amount at position
        blurAmount = (stop > position) ? position / stop * blurFull : blurFull;

        // Calculated real time zoom amount at position (to hide the underlying background color)
        backGroundZoomAmount = (stop > position) ? position / stop * blurFull + 100 : blurFull + 100;

    }

    /* -------------------------
       Where the magic happens
     --------------------------*/

    /*
     * Check if there's body background color showing under the curtains
     * and resize the curtain if true
     */
    if (windowWidth / windowHeight > aspectRatio) {
        curtain.css("width", backGroundZoomAmount + "%");
        curtain.css("height", "auto");
    } else {
        curtain.css("height", backGroundZoomAmount + "%");
        curtain.css("width", "auto");
    }

    /*
     * Centers the background
     */
    curtain.css("left", positionLeft + "px");
    curtain.css("top", positionTop + "px");

    // Apply the CSS3 blur filters.
    curtain.css("filter", "blur(" + blurAmount + "px)");
    curtain.css("-webkit-filter", "blur(" + blurAmount + "px)");
    curtain.css("-moz-filter", "blur(" + blurAmount + "px)");

}

// Call the function on page load
$(function () {
    'use strict';
    scrollBlur();
});

// Call the function when page is scrolled
$(document).scroll(function () {
    'use strict';
    scrollBlur();
});

// Fit video element on resize
$(window).resize(function () {
    'use strict';
    scrollBlur();
});

// Pause video if clicked
$("#logo").click(function () {
    'use strict';
    $("video").get(0).paused ? $("video").get(0).play() : $("video").get(0).pause();
});