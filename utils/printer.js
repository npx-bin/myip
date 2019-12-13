/*
 * Printer
 * Author: @kcak11
**/

const chalk = require("chalk");

module.exports = {
    print: function() {
        console.log.apply(console, arguments);
    },
    printLine: function(length) {
        let str = "";
        for (let i = 0; i < length; ++i) {
            str += "~";
        }
        console.log(chalk.blue.bgWhite(` ${str} `));
    }
};
