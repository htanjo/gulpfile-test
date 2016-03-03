'use strict';

var gulp = require('gulp');

gulp.task('copy', function () {
  return gulp.src('app/*')
    .pipe(gulp.dest('dist'));
});
