# Forget utm

Remove `utm_` query string parameters from a url.

## Install

`npm install futm`

## Usage

```js
const futm = require('futm');

const url = 'https://example.org?utm_source=twitter&name=dog';

futm(url); // => 'https://example.org?name=dog'
```

## Only tested in Chrome and Firefox!

This module assumes the js environment has

- decent es6 support
- [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) api
- [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) api

## License

MIT
