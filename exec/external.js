/*
 * Fetch External(Public) IP
 * Author: @kcak11
 *
 * The external IP information is fetched from:
 * https://whatismyipaddress.com (Thanks for the API)
**/

const axios = require('axios');

module.exports = function(action) {
    let promise = axios.get("https://ipv4bot.whatismyipaddress.com/");
    return new Promise((resolve, reject)=>{
        promise.then((response)=>{
            resolve(response.data);
        }).catch((err)=>{
            reject(err);
        });
    });
};
