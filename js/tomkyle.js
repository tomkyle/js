var tomkyle = (function(window, $, API){


    // Make often-used jQueries available
    API.$document = $(document);
    API.$body     = $('body');

    // Publics
    API.is_dev_server   = API.is_dev_server || false;


    API.base_uri        = API.base_uri || null;
    API.static_base_uri = API.static_base_uri || null;
    API.secure_base_uri = API.secure_base_uri || null;



/**
 * @return bool
 */
    API.isDevServer = function() {
        return API.is_dev_server;
    };




    API.getUri = function( path ) {
        if(typeof path != 'undefined') {
            return API.base_uri + path;
        }
        return API.base_uri;
    };


    API.getSecureUri = function( path ) {
        if(typeof path != 'undefined') {
            return API.secure_base_uri + path;
        }
        return API.secure_base_uri;
    };


    API.getStaticUri = function( path ) {
        if(typeof path != 'undefined') {
            return API.static_base_uri + path;
        }
        return API.static_base_uri;
    };










    API.$body.on('click', "a[rel=external]", function(event) {
        if (!this.target) {
            this.target = "_blank";
        }
    });



    return API;


}(window, window.jQuery, window.tomkyle || {}));


