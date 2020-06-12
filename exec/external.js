/*
 * Fetch External(Public) IP
 * Author: @kcak11
 *
 * The external IP information is fetched from:
 * https://cors.kcak11.com/?myip=yes
**/

const axios = require('axios');

module.exports = function(action) {
    let promise = axios.get("https://cors.kcak11.com/?myip=yes");
    return new Promise((resolve, reject)=>{
        promise.then((response)=>{
            resolve(response.data);
        }).catch((err)=>{
            reject(err);
        });
    });
};
