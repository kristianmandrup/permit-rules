# Rules

* [Rules](https://github.com/kristianmandrup/permit-authorize/wiki/Rules)

## Code

The code has been developed in [LiveScript](http://livescript.net/) which is very similar too [Coffee script](http://coffeescript.org/).
See [coffee-to-ls](http://livescript.net/#coffee-to-ls)

## Usage

Can be used with [permit-authorize](https://github.com/kristianmandrup/permit-authorize) or your any
Authorization library of choice...

## Contribution

Please help improve this project, suggest improvements, add better tests etc. ;)

### Utility functions + dependencies

Currently dependencies to a few lodash functions

[lodash custom builds](http://lodash.com/custom-builds)

```bash
$ npm install -g lodash-cli
$ lodash include=extend,filter,find,map,unique
```

### Browserify

[browserify](http://browserify.org)

Exposes a single global variable `permitAuthorize`

`browserify index.js --s permitAuthorize > permit-authorize.js`

To uglify (minimize)

`uglifyjs permit-authorize.js -cm > permit-authorize.min.js`

For convenience, simply run the `browserify-all.sh` shell script in the project root.

## ES6 compatible modules

Experimental `e6ify.js` now included:

- http://thlorenz.github.io/es6ify/
- https://github.com/thlorenz/es6ify/blob/master/example/build.js

## Licence

MIT License
Copyright 2014-2015 Kristian Mandrup

See LICENSE file