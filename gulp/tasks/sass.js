const gulp  = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');

const conf = require('../gulpconfig');

gulp.task('sass', function () {
    return gulp.src(conf.path.src.sass + '/**/*.{scss,sass}')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(conf.path.dest.css));
});