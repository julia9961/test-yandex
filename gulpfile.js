const gulp        = require('gulp');
const requireDir  = require('require-dir');

requireDir('./gulp/tasks', {recurse: false});

gulp.task('default', ['watch']);