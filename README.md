# MyIP - Utility for fetching IP Addresses

## Installation:
`$ npm i -g @kcak11/myip`

### Usage as Command Line Interface (CLI):
`$ myip`

The above will output the current IP addresses associated with your machine as below:

```
Following are the IP Addresses for your machine: 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
xx.yy.zz.pp     | http://xx.yy.zz.pp (or) https://xx.yy.zz.pp
aa.bb.cc.dd     | http://aa.bb.cc.dd (or) https://aa.bb.cc.dd
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
```

## Usage in Node Scripts
~~~
const myip=require("@kcak11/myip");
let listOfIP = myip(); // listOfIP will be an array containing the IP addresses.
console.log(listOfIP);
~~~

Output:
~~~
["xx.yy.zz.pp","aa.bb.cc.dd"]
~~~

© 2019 [kcak11.com](https://www.kcak11.com)  
License: MIT (https://mit-license.kcak11.com)
