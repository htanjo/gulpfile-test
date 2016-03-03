# Test for gulpfile.js

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

## What is this?
Example for testing **`gulpfile.js`**.  
The test suite executes gulp tasks programmatically.
This means you can easily get the code coverage for the test.

This approach would be helpful when you create a project starter kit or [Yeoman](http://yeoman.io/) generator.

## Setup
```
$ npm install
```

## Run test
This runs unit test for [`gulpfile.js`](gulpfile.js) and [`subproject/gulpfile.js`](subproject/gulpfile.js) using [Mocha](https://mochajs.org/) and [Istanbul](https://github.com/gotwarlost/istanbul).
```
$ npm test
```

Results:
```
gulp
  task "copy"
    ✓ outputs file into "dist" directory
    ✓ outputs file with expected content

gulp in subproject
  task "copy"
    ✓ outputs file into "dist" directory
    ✓ outputs file with expected content

4 passing (48ms)

=============================== Coverage summary ===============================
Statements   : 100% ( 6/6 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 2/2 )
Lines        : 100% ( 6/6 )
================================================================================
```

## License
Copyright (c) 2016 Hiroyuki Tanjo.
Licensed under the MIT License.

[travis-image]: https://travis-ci.org/htanjo/gulpfile-test.svg?branch=master
[travis-url]: https://travis-ci.org/htanjo/gulpfile-test
[coveralls-image]: https://coveralls.io/repos/htanjo/gulpfile-test/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/htanjo/gulpfile-test
