/*
 * Fetch the Internal IP addresses for the machine.
 * Author: @kcak11
**/

const os = require('os');
const ifaces = os.networkInterfaces();

module.exports = function() {
    let hosts = [];
    Object.keys(ifaces).forEach((ifname)=>{
        ifaces[ifname].forEach((iface)=>{
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }
            hosts.push(iface.address);
        });
    });
    return hosts;
};
