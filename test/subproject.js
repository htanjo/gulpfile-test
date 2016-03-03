'use strict';

var rewire = require('rewire');
var gulpfile = rewire('../subproject/gulpfile');
var gulp = gulpfile.__get__('gulp');
var runSequence = require('run-sequence').use(gulp);
var assert = require('yeoman-assert');
var path = require('path');
var originalCwd = process.cwd();

describe('gulp in subproject', function () {
  before(function () {
    process.chdir(path.join(__dirname, '../subproject'));
  });

  after(function () {
    process.chdir(originalCwd);
  });

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
      assert.fileContent('dist/index.html', /subproject/);
    });
  });
});
