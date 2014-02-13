var tomkyle = tomkyle || {};
tomkyle.Classes = (function($, window, tomkyle, API) {


    // "basic" inheritance
    API.inherit = function(src, target) {
        if (typeof target == 'undefined') {
            target = {};
        }
        for (var key in src) {
            if (src.hasOwnProperty(key)) {
                target[key] = src[key];
            }
        }
        return target;
    };

    return API;


})(window.jQuery, window, window.tomkyle, window.tomkyle.Classes || {});

