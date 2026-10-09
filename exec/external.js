/*
 * Fetch External(Public) IP
 * Author: @kcak11
 *
 * The external IP information is fetched from:
 * https://cors.kcak11.com/?myip=yes
**/

const https = require('https');
const URL_ENDPOINT = "https://cors.kcak11.workers.dev/?myip=yes";

module.exports = function (action) {
    return new Promise((resolve, reject) => {
        const req = https.get(URL_ENDPOINT, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                res.resume(); // discard body
                return reject(new Error("Request failed with status code " + res.statusCode));
            }

            res.setEncoding('utf8');
            let body = '';
            res.on('data', (chunk) => { body += chunk; });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    resolve(body);
                }
            });
        });
        req.on('error', reject);
        req.setTimeout(10000, () => {
            req.destroy(new Error("Request timed out"));
        });
    });
};