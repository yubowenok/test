var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var scssStylish = require('gulp-scss-lint-stylish2');
var gutil = require('gulp-util');
var paths = require('./paths.js');

gulp.task('lint-scss', function(cb) {
  var reporter = scssStylish();
  var reporterWrapper = function(file, stream) {
    reporter.issues(file, stream);
    if (file.scsslint.warnings || file.scsslint.errors) {
      stream.emit('error', new gutil.PluginError('scss-lint',
        'scss-lint failed'));
    }
  };

  return gulp.src(paths.scss)
    .pipe(scsslint({
      customReport: reporter.issues
    }))
    .pipe(reporter.printSummary)
    .pipe(scsslint.failReporter());
});

gulp.task('lint', ['lint-scss']);
