#!/usr/bin/env node

/*
 * CLI for print the IP Addresses associated with the machine
 * Author: @kcak11
**/

const myip = require('../exec');
const formatter = require('../utils/formatter');
const {print, printLine} = require('../utils/printer');
const chalk = require("chalk");
const hosts = myip();
const BOX_SIZE = 56;
print();
print(chalk.red.bgWhite(` ${formatter(" ", true, BOX_SIZE + 1)}`));
print(chalk.red.bgWhite(` ${formatter("Following are the IP Addresses for your machine:    ", true, BOX_SIZE + 1)}`));
print(chalk.red.bgWhite(` ${formatter(" ", true, BOX_SIZE + 1)}`));
printLine(BOX_SIZE);
print(chalk.blue.bgWhite(formatter(` |       IP Address     | Usage in a web-browser        | `, true, BOX_SIZE + 2)));
printLine(BOX_SIZE);
hosts.forEach(host=>{
    print(chalk.blue.bgWhite(formatter(` |  ${formatter(host)}     | http://${formatter(host, true)}        | `, true, BOX_SIZE + 2)));
}
);
printLine(BOX_SIZE);
print(chalk.red.bgWhite(` ${formatter(" ", true, BOX_SIZE + 1)}`));
print();
print(`For more cool stuff, visit: https://github.com/kcak11`);
print();
process.exit(0);
