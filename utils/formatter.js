/*
 * Formatter
 * Author: @kcak11
**/

module.exports = function(inp, suffixPadding, length) {
    if (!inp) {
        return inp;
    }
    let size = length || 15;
    let result = "" + inp;
    if (result.length < size) {
        let padding = "";
        for (let i = 0; i < size - result.length; ++i) {
            padding += " ";
        }
        if (suffixPadding) {
            result = result + padding;
        } else {
            result = padding + result;
        }
    }
    return result;
};
