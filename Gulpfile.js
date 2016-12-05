'use strict';

const gulp  = require('gulp'),
     sass  = require('gulp-sass'),
     babel = require('gulp-babel'),
     watch = require('gulp-watch');

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

gulp.task('watch', function(){
    gulp.watch('web/bundles/AppBundle/js/**/*.js', ['babel']);
    gulp.watch('web/bundles/AppBundle/scss/app.scss', ['sass']);
    gulp.watch('web/bundles/AppBundle/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'babel', 'watch']);

