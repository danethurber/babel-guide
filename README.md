# Using [Babel](https://babeljs.io)

> **Transpiling** is a specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction.

## Why?

Get all the benefits of future versions of ecmascript today.

Things our team has found valuable and some things that are amazing but we don't know what to do with yet.

- let and const
- string interpolation
- arrow functions
- destructuring
- param defaults
- params rest
- spreads
- class and extends
- import/export modules
- async/await
- decorators
- es7 function bind syntax
- and many other things (map, set, reflect, symbols, iterators, generators, mathz)

[a wild example appears](https://github.com/ps-dev/ps-messaging-node/blob/master/src/subscriber.js)

## How?

### Using the CLI

```bash
npm install babel-cli
```

```bash
babel src -d lib
```

### Using the Require Hook

```bash
npm install babel-core
```

```js
require('babel-register')
require('./some-file')
```

### Compile Before Publish for NPM

```json
{
  "name": "awesome-component",
  "version": "8.13.86",
  "scripts": {
    "prepublish:": "babel src -d lib"
  },
  "main": "lib/index.js"
}
```

### .babelrc file

This is want our config looks like for babel 6. There are many like it but this one is mine.

```json
{
  "presets": [
    "es2015",
    "stage-0",
    "react"
  ],
  "plugins": [
    "add-module-exports",
    "transform-runtime",
    "transform-decorators-legacy"
  ]
}
```

some explanation

[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) - all the es2015 goodness

[babel-preset-stage-0](http://babeljs.io/docs/plugins/preset-stage-0/) - some more experimental stuff:
- functional binding
- rest and spread
- async/await

[babel-preset-react](https://www.npmjs.com/package/babel-preset-react) - jsx baby

[babel-plugin-add-module-exports](https://www.npmjs.com/package/babel-plugin-add-module-exports) - use babel 5 style module.exports

[babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) - polyfill code without globals

[babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) - add back decorators support

## Setup and Benefits

live demo time!

```bash
npm init -yes
npm install babel-core babel-preset-es2015 babel-preset-stage-0 babel-preset-react babel-plugin-add-module-exports babel-plugin-transform-runtime babel-plugin-transform-decorators-legacy
```

add to entry point file

```js
require('babel-register')
require('./src')
```

start as normal

```js
node .
```

## In the Browser with Webpack

```bash
npm install babel-loader
```

setup the babel loader to transpile js files

```js
module: {
  loaders: [{
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/
  }]
}
```

The loader will read in your `.babelrc` file just the same as the cli and require hook.

## Further Reading

- [Babel Learn ES205](https://babeljs.io/docs/learn-es2015/)
- [Code Wars](http://www.codewars.com/)
