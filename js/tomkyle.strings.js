/**
 * supplant() does variable substitution on the string.
 * It scans through the string looking for expressions enclosed
 * in { } braces. If an expression is found, use it as a key on the object,
 * and if the key has a string value or number value, it is substituted for
 * the bracket expression and it repeats. This is useful for automatically
 * fixing URLs.
 *
 * @see  http://javascript.crockford.com/remedial.html
 */
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}


/**
 * The trim() method removes whitespace characters
 * from the beginning and end of the string.
 *
 * @see  http://javascript.crockford.com/remedial.html
 */
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1");
    };
}
