var tomkyle = tomkyle || {};


tomkyle.User = (function(window, tomkyle, U) {

    U.api_key = window.user_api_key || null;

    tomkyle.$document.ready( function (event) {
        tomkyle.log("[domready] tomkyle.User");
    });


    return U;

}(window, tomkyle, tomkyle.User || {}));
