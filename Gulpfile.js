'use strict';

var gulp  = require('gulp');
var sass  = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('sass', function () {
    return gulp.src('web/bundles/AppBundle/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('web/assets/css'));
});

gulp.task('babel', function () {
    return gulp.src('web/bundles/AppBundle/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('web/assets/js'));
});