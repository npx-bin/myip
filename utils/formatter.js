/*
 * Formatter
 * Author: @kcak11
**/

module.exports = function (inp, cfg) {
    if (!inp) {
        return inp;
    }
    let config = cfg || {};
    let size = config.length || 15;
    let result = "" + inp;
    if (result.length < size) {
        let padding = "";
        let iterations = size - result.length + (config.extraPadding || 0);
        for (let i = 0; i < iterations; ++i) {
            padding += " ";
        }
        if (config.suffixPadding) {
            result = result + padding;
        } else {
            result = padding + result;
        }
    }
    return result;
};
