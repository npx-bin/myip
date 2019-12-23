const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = {
  blockInput: function(){
    rl.pause();
  }
};
