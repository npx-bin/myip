/*
 * Fetch External(Public) IP
 * Author: @kcak11
 *
 * The external IP information is fetched from:
 * https://whatismyipaddress.com (Thanks for the API)
**/

const request = require("request-promise");

module.exports = function(action) {
    return request("https://ipv4bot.whatismyipaddress.com/");
};
