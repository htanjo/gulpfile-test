'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var assert = require('yeoman-assert');

require('../gulpfile');

describe('gulp', function () {
  describe('task "copy"', function () {
    before(function (done) {
      runSequence('copy', function (err) {
        if (err) throw err;
        done();
      });
    });

    it('outputs file into "dist" directory', function () {
      assert.file('dist/index.html');
    });

    it('outputs file with expected content', function () {
      assert.fileContent('dist/index.html', /gulp/);
    });
  });
});
