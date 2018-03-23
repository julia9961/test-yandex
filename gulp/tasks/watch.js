const gulp  = require('gulp');

const conf = require('../gulpconfig');

gulp.task('watch', function() {
    gulp.watch(conf.path.src.sass + '/**/*.{scss,sass}', ['sass']);
});