<img src="https://raw.githubusercontent.com/npx-bin/misc/master/myip_logo.png" width="100%" />

# MyIP - A Utility to fetch IP Addresses

## Installation:
```
$ npm i -g @kcak11/myip
```

### Usage as Command Line Interface (CLI):
```
$ myip
```

The above will output the current IP addresses associated with your machine as below:

```
                                                          
 Following are the IP Addresses for your machine:         
                                                          
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
 |       IP Address     | Usage in a web-browser        | 
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
 |      xyz.pqr.a.b     | http://xyz.pqr.a.b            | 
 |   xyz.pq.abc.def     | http://xyz.pq.abc.def         | 
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
                                                          
 External(public) IP: XXX.YY.ZZ.AAA                  
                                                          
```

## Usage in Node Scripts
```
const myip=require("@kcak11/myip");
let listOfIP = myip(); // listOfIP will be an array containing the IP addresses.
console.log(listOfIP);

let externalIP = require("@kcak11/myip/external");
externalIP().then((data) => {
  console.log("External IP: " + data.myip);
  console.log("Country: " + data.country);
});
```

Output:
```
["xyz.pqr.a.b","xyz.pq.abc.def"]
External IP: XXX.YY.ZZ.AAA
Country: CC
```

## License:  [MIT License](https://mit-license.kcak11.com)
&copy; 2023 [kcak11.com](https://www.kcak11.com "Ashish's Web")
