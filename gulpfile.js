var gulp = require('gulp');
var requireDir = require('require-dir');
var paths = require('./gulp/paths.js');

requireDir('./gulp', {recurse: true});

gulp.task('test', ['lint']);

gulp.task('default', ['lint']);
