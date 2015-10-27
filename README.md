# metalsmith-raw
Metalsmith plugin to include raw file contents in templates.

Paths are relative to metalsmith's **"source"** directory.

## Usage

#### Install
```bash
npm install metalsmith-raw
```

#### API
```javascript
var raw = require('metalsmith-raw');
metalsmith.use(raw());
```

#### CLI (metalsmith.json)
```javacript
{
  "plugins" : {
    "metalsmith-raw": true
  }
}
```

## Example

#### index.jade
```jade
---
source : 'myfile.txt'
---
p !{raw(source)}
```

## License

Apache-2.0