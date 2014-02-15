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


/**
 * quote()
 *
 * Produces a quoted string. This method returns a string
 * that is like the original string except that it is wrapped
 * in quotes and all quote and backslash characters are
 * preceded with backslash.
 *
 * @see  http://javascript.crockford.com/remedial.html
 */
if (!String.prototype.quote) {
    String.prototype.quote = function () {
        var c, i, l = this.length, o = '"';
        for (i = 0; i < l; i += 1) {
            c = this.charAt(i);
            if (c >= ' ') {
                if (c === '\\' || c === '"') {
                    o += '\\';
                }
                o += c;
            } else {
                switch (c) {
                case '\b':
                    o += '\\b';
                    break;
                case '\f':
                    o += '\\f';
                    break;
                case '\n':
                    o += '\\n';
                    break;
                case '\r':
                    o += '\\r';
                    break;
                case '\t':
                    o += '\\t';
                    break;
                default:
                    c = c.charCodeAt();
                    o += '\\u00' + Math.floor(c / 16).toString(16) +
                        (c % 16).toString(16);
                }
            }
        }
        return o + '"';
    };
}
