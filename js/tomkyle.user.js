var tomkyle = tomkyle || {};


tomkyle.User = (function(window, tomkyle, U) {

    U.api_key = U.api_key || null;

    tomkyle.$document.ready( function (event) {
        tomkyle.log("[domready] tomkyle.User");
    });


    return U;

}(window, window.tomkyle, window.tomkyle.User || {}));
