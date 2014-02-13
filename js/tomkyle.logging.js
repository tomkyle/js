var tomkyle = tomkyle || {};
tomkyle.Logging = (function($, window, tomkyle, API) {


    API.debug = API.debug || tomkyle.debug || false;

/**
 * Contains the Diagnosis container jQuery element
 */
    var $diag      = null;



/**
 * @param mixed
 */
    tomkyle.log = function() {
        return API.debug ? console.log.apply(console, arguments) : null;
    };


/**
 * Adds the given message to a special div with ID "diag";
 * If none could be found, it will be created and appended to the body.
 * @param mixed
 */
    tomkyle.diag = function(msg)
    {
        if (!API.debug) return;

        if ($diag && $diag.length) {
            return addMessage( msg );
        }

        if (!$diag) {
            $diag = $('#diag');
        }

        if ($diag.length < 1) {
            tomkyle.log("CREATE diagnosis div #diag");
            $diag = $('<div id="diag" class="tomkyle diagnosis"></div>').appendTo($('body'));
        }
        return addMessage( msg );
    };


    tomkyle.addMessage = function( msg ) {
        $diag.stop(true, true).show().prepend("<div>" + msg + "</div>");
        return API;
    };

/**
 * Global click handler: Fade out and empty dignosis div
 */
    tomkyle.$body.on('click', '.tomkyle.diagnosis', function() {
        $(this).stop(true, true).fadeOut( function() { $(this).empty(); });
    });


    return API;


})(window.jQuery, window, window.tomkyle, window.tomkyle.Logging || {});

