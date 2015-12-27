var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var scssStylish = require('gulp-scss-lint-stylish2');
var paths = require('./paths.js');

gulp.task('lint-scss', function(cb) {
  var reporter = scssStylish();
  return gulp.src(paths.scss)
    .pipe(scsslint({
      customReport: reporter.issues
    }))
    .pipe(reporter.printSummary)
    .on('error', function(err) {
      cb(err);
    });
});

gulp.task('lint', ['lint-gulp', 'lint-web', 'lint-scss']);
