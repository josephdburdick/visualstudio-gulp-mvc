var gulp = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('scripts', function(){
    gulp.src('start.js')
        .pipe(browserify({
            insertGlobals: false,
            debug: false
        })).pipe(gulp.dest('./build'));
});

gulp.task('default', ['scripts']);