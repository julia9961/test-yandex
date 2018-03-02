'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('sass/main.scss')
        .pipe(sass({
            // includePaths: require('node-normalize-scss').with('other/path', 'another/path')
            // - or -
            // includePaths: require('node-reset-scss').includePath
            // includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe(gulp.dest('sass/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/main.scss', ['sass']);
});
