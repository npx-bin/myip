# MyIP - Utility for fetching IP Addresses

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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    xyz.pqr.a.b     | http://xyz.pqr.a.b         | https://xyz.pqr.a.b
 xyz.pq.abc.def     | http://xyz.pq.abc.def      | https://xyz.pq.abc.def
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

## Usage in Node Scripts
```
const myip=require("@kcak11/myip");
let listOfIP = myip(); // listOfIP will be an array containing the IP addresses.
console.log(listOfIP);
```

Output:
```
["xyz.pqr.a.b","xyz.pq.abc.def"]
```

<br/>

## License:  [MIT License](https://mit-license.kcak11.com)
&copy; 2019 [kcak11.com](https://www.kcak11.com "Ashish's Web")
