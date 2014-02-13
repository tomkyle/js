/**
 * Replaces img src for browsers, that do not support SVG,
 * with the fallback img
 */
var tomkyle = tomkyle || {};
tomkyle.Svg = (function($, window, Modernizr, tomkyle, Svg) {


    Svg.applySvgFallback = function() {
        tomkyle.log("[applySvgFallback]", !Modernizr.svg);
        if( !Modernizr.svg ) {
            $('img[src*="svg"][data-fallback]').attr('src', function() {
                return $(this).data('fallback');
            });
        }
    };


    tomkyle.$document.ready( Svg.applySvgFallback() );


    return Svg;

})(window.jQuery, window, window.Modernizr, window.tomkyle, window.tomkyle.Svg || {});

