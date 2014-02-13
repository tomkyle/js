/**
 * tomkyle Browser submodule
 *
 * Analyzes the current device and adds (in the way Modernizr does)
 * various selectors to the html-Element:
 *
 * - mobile  vs. no-mobile
 * - android vs. no-android
 * - iphone  vs. no-iphone
 * - ipad    vs. no-ipad
 * - ipod    vs. no-ipod
 * - apple   vs. no-apple
 *
 * For scripting, this module offers certain methods, such as:
 * - isMobile()
 * - isAndroid()
 * - isApple()
 * - isiPhone()
 * - isiPad()
 * - isiPod()
 *
 * Requirements:
 * - jQuery
 * - from www-detectmobilebrowser.com:
 *   - detectmobilebrowser.js OR
 *   - jquery.detectmobile.js
 *
 * @author: Carsten Witt <carsten.witt@gmail.com>
 */

tomkyle.browser = (function($, window, document, tomkyle, API) {

    var the_window = $(window);

    var user_agent_string_lc = navigator.userAgent.toLowerCase();

    // http://jquerybyexample.blogspot.com/2012/02/detect-android-devices-using-jquery.html
    var is_android = user_agent_string_lc.indexOf("android");

    // http://jquerybyexample.blogspot.com/2012/02/detect-apple-devices-ipad-iphone-ipod.html
    var is_iPhone = user_agent_string_lc.indexOf("iphone");
    var is_iPad   = user_agent_string_lc.indexOf("ipad");
    var is_iPod   = user_agent_string_lc.indexOf("ipod");



    API.isMobile = function() {
        return $.browser.mobile;
    };

    // http://jquerybyexample.blogspot.com/2012/02/detect-android-devices-using-jquery.html
    // http://jquerybyexample.blogspot.com/2012/02/detect-apple-devices-ipad-iphone-ipod.html
    API.isAndroid = function() { return (is_android > -1); };

    API.isApple = function() {  return (API.isiPhone() || API.isiPad() ||  API.isiPod()) ; };

    API.isiPhone = function()  { return (is_iPhone > -1); };

    API.isiPad = function()    { return (is_iPad > -1); };

    API.isiPod = function()    { return (is_iPod > -1); };


    API.getDeviceOrientation = function() {
        return (typeof  window.orientation == "undefined") ? null : window.orientation;
    };


    API.reportViewport = function() {
        return window.innerWidth + "x" + window.innerHeight + " / " + API.getDeviceOrientation();
    };



    $(window).on("debouncedresize orientationchange", function( event ) {
        tomkyle.log(event);
        tomkyle.diag("[" + event.type + "] " + API.reportViewport());
    });




    // extend <html> element
    $(document.documentElement) .addClass( API.isMobile()  ? "mobile"  : "no-mobile" )
                                .addClass( API.isAndroid() ? "android" : "no-android")
                                .addClass( API.isiPhone()  ? "iphone"  : "no-iphone")
                                .addClass( API.isiPad()    ? "ipad"    : "no-ipad")
                                .addClass( API.isiPod()    ? "ipod"    : "no-ipod")
                                .addClass( API.isApple()   ? "apple"   : "no-apple");




    return API;

}(  window.jQuery,
    window,
    document,
    window.tomkyle,
    window.tomkyle.browser || {}));



