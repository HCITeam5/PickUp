'use strict';
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
gulp.task('css', function() {
    return gulp.src('css/main/*.css')
        .pipe(concatCss('styles.css'))
        .pipe(gulp.dest('css/'));
});

gulp.task('default', ['css']);