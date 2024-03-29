#!/usr/bin/env node

/*
 * CLI to print the IP Addresses associated with the machine.
 * Author: @kcak11
**/

require('../utils/io').blockInput();

(function () {
    const myip = require('../exec');
    const externalip = require('../exec/external');
    const pkgInfo = require('../package.json');
    const formatter = require('../utils/formatter');
    const { print, printLine } = require('../utils/printer');
    const chalk = require("chalk");
    const hosts = myip();
    const BOX_SIZE = 56;
    const EMPTY_LINE = chalk.red.bgWhite(` ${formatter(" ", {
        suffixPadding: true,
        length: BOX_SIZE + 1
    })}`);

    print();
    print(" myip@" + pkgInfo.version + " - Determining IP Addresses . . .");
    print();
    print(EMPTY_LINE);
    print(chalk.red.bgWhite(` ${formatter("Following are the IP Addresses for your machine:    ", {
        suffixPadding: true,
        length: BOX_SIZE + 1
    })}`));
    print(EMPTY_LINE);
    printLine(BOX_SIZE);
    print(chalk.blue.bgWhite(formatter(` |       IP Address     | Usage in a web-browser        | `, true, BOX_SIZE + 2)));
    printLine(BOX_SIZE);
    hosts.forEach(host => {
        let hostText = chalk.bold(host);
        print(chalk.blue.bgWhite(formatter(` |  ${formatter(hostText, {
            length: 15 + hostText.length - host.length
        })}     | http://${formatter(host, {
            suffixPadding: true
        })}        | `, true, BOX_SIZE + 2)));
    });
    printLine(BOX_SIZE);
    print(EMPTY_LINE);

    let endProg = function () {
        print();
        print(`For more cool stuff, visit: https://github.com/kcak11`);
        print();
        process.exit(0);
    };

    externalip().then((data) => {
        let externalIP = chalk.bold(data.myip);
        let country = chalk.bold(data.country);
        print(chalk.red.bgWhite(` ${formatter("External(public) IP: " + externalIP, {
            suffixPadding: true,
            length: BOX_SIZE + 1,
            extraPadding: externalIP.length - data.myip.length
        })}`));
        print(chalk.red.bgWhite(` ${formatter("Country: " + country, {
            suffixPadding: true,
            length: BOX_SIZE + 1,
            extraPadding: country.length - data.country.length
        })}`));
        print(EMPTY_LINE);
        endProg();
    }).catch((err) => {
        endProg();
    });
})();
