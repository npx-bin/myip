/*
 * IP V4 Formatter
 * Author: @kcak11
**/
module.exports = function(ip, suffixPadding) {
    if (!ip) {
        return ip;
    }
    let result = "" + ip;
    if (result.length < 15) {
        let padding = "";
        for (let i = 0; i < 15 - result.length; ++i) {
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
