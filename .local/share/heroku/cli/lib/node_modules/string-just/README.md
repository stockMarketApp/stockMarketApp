# string-just

Add Ruby ljust/rjust methods to JavaScript String

## Installation

Install with npm:

```
$ npm install string-just
```

  Install with component:

```
$ component install MisumiRize/js-string-just
```

## Example

### Basic

```javascript
var just = require('just');

just.ljust('test', 10);       // => 'test      '
just.rjust('test', 10);       // => '      test'

just.ljust('test', 10, 'a');  // => 'testaaaaaa'
```

### Polyfill

```javascript
just();

'test'.ljust(10);  // => 'test     '
```
