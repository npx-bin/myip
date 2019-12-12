/*
 * IP V4 Formatter
 * Author: @kcak11
**/
module.exports = function(ip) {
    if (!ip) {
        return ip;
    }
    let result = "" + ip;
    if (result.length < 15) {
        let prefix = "";
        for (let i = 0; i < 15 - result.length; ++i) {
            prefix += " ";
        }
        result = prefix + result;
    }
    return result;
};
