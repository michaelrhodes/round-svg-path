# round-svg-path
round-svg-path rounds the position of a [parsed SVG path](https://github.com/jkroso/parse-svg-path) to a fixed number of digits. It was extracted from Fontello’s wonderful [svgpath](https://github.com/fontello/svgpath) toolkit.

<small>Older browsers might require a polyfill for [Array.prototype.map](http://kangax.github.io/es5-compat-table/#Array.prototype.map).</small>

## Install
```sh
$ npm install round-svg-path
```

## API
```js
round(path, digits)
```

### Example
``` js
var parse = require('parse-svg-path')
var serialize = require('serialize-svg-path')
var round = require('round-svg-path')

var path = parse('M10.25 10.25 L15.25 15.25')
var x = round(path, 1)

serialize(x)
// => 'M10.3 10.3 L15.3 15.3'
```

### License
[MIT](http://opensource.org/licenses/MIT)
