/**
 * jQuery Enhancements
 */


/**
 * Log method for jQuery element collection.
 *
 * It does not make anything different than calling console.log,
 * but can be 'injected' in chained method calls easier.
 */
jQuery.fn.log = function (msg) {
  console.log("%s\n%o", msg, this);
  return this;
};



/**
 * Create an enhanced position object that
 * contains 'right' and 'bottom' positions for jQuery elements
 */
jQuery.fn.extendedPosition = function () {
  var position = this.position();
  position.right  = position.left + this.outerWidth();
  position.bottom = position.top  + this.outerHeight();
  return position;
};


/**
 * Create an enhanced position object that
 * contains width and height height of the element.
 */
jQuery.fn.cssDimensions = function () {
    return {
        width:  this.width(),
        height: this.height()
    };
};


/**
 * Gets the maximum heigzt of the given elements.
 */
jQuery.fn.maxHeight = function() {
  var max = 0;
  this.each(function() {
    max = Math.max( max, $(this).height() );
  });
  return max;
};

