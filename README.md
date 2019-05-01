# Qberry Open Protocol Parser JS v.1.0.0-beta1

"Qberry Open Protocol Parser JS (qberry-open-protocol-parsing-js)" is the official javascript library for parsing messages built with ["Qberry Open Protocol"](https://github.com/denizkanmaz/qberry-open-protocol).

You can get the latest release from the official [npmjs.com feed](https://www.npmjs.com/package/qberry-open-protocol-parsing-js) or from the [github releases page](https://github.com/denizkanmaz/qberry-open-protocol-parsing-js/releases).

Also see: [dotnet version](https://github.com/denizkanmaz/qberry-open-protocol-parsing-dotnet).

[![Build Status](https://travis-ci.com/denizkanmaz/qberry-open-protocol-parsing-js.svg?branch=master)](https://travis-ci.com/denizkanmaz/qberry-open-protocol-parsing-js)

## Getting Started

### Example 1:
Demonstration of parsing a "HOLA" message.
```javascript
    // Import the necessary stuffs..
	const { parse, createMessage } = require('qberry-open-protocol-parsing-js');

	// The raw message from the device..
	const rawMessage = '$|11|HOLA|12|90111122223333444|13|WMXQFV|14|B23a56|15|ONE|16|1.0.0|$';

	// Parse the raw message using message-parser utility.
	var pr = parse(rawMessage);

	// Write the message type to the console.
	console.log('The type of the message is ' + pr.messageType + '.');

	// It is possible to create the object form of the message with message specific properties.
	var m = createMessage(pr);

	// Write some values to the console.
	console.log('The device id is ' + m.deviceIdentity + '.');
	console.log('The protocol version of the device id is ' + m.protocolVersion + '.');
```
  
### Example 2:
Demonstration of parsing a "GNSS" message.
```javascript
    // Import the necessary stuffs..
    const { parse, createMessage } = require('qberry-open-protocol-parsing-js');
    
    // The raw message from the device..
    const rawMessage = '$|11|GNSS|12|90111122223333444|13|WMXQFV|211|1|212|39.922790|213|32.838507|214|108.600|215|0.43|216|344.6|217|1|218|5|219|0|$';
    
    // Parse the raw message using message-parser utility.
    var pr = parse(rawMessage);
    
    // Write the message type to the console.
    console.log('The type of the message is ' + pr.messageType + '.');
    
    // It is possible to create the object form of the message with message specific properties.
    var m = createMessage(pr);
    
    // Write some value to the console.
    console.log('The device id is ' + m.deviceIdentity + '.');
    console.log('The Latitude is ' + m.latitude + '.');
    console.log('The Longtitude is ' + m.longtitude + '.');
    console.log('Moving in ' + m.speedOverGround + '/km speed.')
```
## Versioning

Used [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/denizkanmaz/qberry-open-protocol-parsing-dotnet/tags). 

## Authors

* **[Deniz Kanmaz (denizkanmaz@gmail.com)](https://github.com/denizkanmaz)** - *Initial work* - [qberry.io](https://qberry.io)

## License

This project is licensed under the GNU General Public License v3 - see the [LICENSE.md](LICENSE.md) file for details.

NOTICE: This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.