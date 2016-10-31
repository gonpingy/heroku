const gulp = require('gulp');
const eslint = require('gulp-eslint');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');
const webserver = require('gulp-webserver');
const fileinclude = require('gulp-file-include');

gulp.task('clean', () => {
});

gulp.task('lint', () => {
  gulp
    .src(['./**/*.js', '!./node_modules/**', '!./output/**'])
    .pipe(eslint())
    .pipe(eslint.format('checkstyle', process.stdout))
    .pipe(eslint.format());
});

gulp.task('server', () => {
  gulp
    .src('./output')
    .pipe(webserver({
      livereload: true,
      host: 'localhost',
    }));
});

gulp.task('unitTest', (cb) => {
  gulp
    .src(['./**/*.js', '!./tests/**', '!./node_modules/**'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp
        .src(['./tests/**/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports({
          dir: './output/coverage',
        }))
        .pipe(istanbul.enforceThresholds({
          thresholds: {
            global: 20,
          },
        }))
        .on('end', cb);
    });
});

gulp.task('fileinclude', function() {
  gulp.src(['public/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
  gulp.watch(['./routes/**', './tests/**'], ['default']);
});

gulp.task('watch:unitTest', () => {
  gulp.watch('./**/*.js', ['unitTest']);
});

gulp.task('default', ['lint', 'unitTest']);
