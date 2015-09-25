'use strict';
var
  gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  istanbul = require('gulp-istanbul'),
  // jsdoc = require("gulp-jsdoc"),
  mocha = require('gulp-mocha'),
  // plato = require('plato'),
  webserver = require('gulp-webserver');

gulp.task('clean', function () {
});

gulp.task('lint', function () {
  gulp
    .src(['./**/*.js', '!./node_modules/**', '!./output/**'])
    .pipe(eslint())
    .pipe(eslint.format('checkstyle', process.stdout))
    .pipe(eslint.format());
});

gulp.task('server', function () {
  gulp
    .src('./output')
    .pipe(webserver({
      'livereload': true,
      'host':       'localhost'
    }));
});

gulp.task('unitTest', function (cb) {
  gulp
    .src(['./**/*.js', '!./tests/**', '!./node_modules/**'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp
        .src(['./tests/**/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports({'dir': './output/coverage'}))
        .pipe(istanbul.enforceThresholds({'thresholds': {'global': 20}}))
        .on('end', cb);
    });
});

gulp.task('watch', function () {
  gulp.watch(['./routes/**', './tests/**'], ['default']);
});

gulp.task('watch:unitTest', function () {
  gulp.watch('./**/*.js', ['unitTest']);
});

gulp.task('default', ['lint', 'unitTest']);
