#!/usr/bin/env node

const myip = require('../exec');
const hosts=myip();
const printLine = () => {
  let str="";
  for(let i=0;i<40;++i){
    str+="~ ";
  }
  console.log(str);
};
console.log();
console.log("Following are the IP Addresses for your machine:");
console.log();
printLine();
hosts.forEach(host => {
  console.log(host + "     | http://"+host+" (or) https://"+host );
});
printLine();
console.log("For more cool stuff, visit: https://github.com/kcak11");
console.log();
