var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/app/js/**/*');
});

gulp.task('html', function() {
  gulp.src('builds/app/*.html');
});

gulp.task('css', function() {
  gulp.src('builds/app/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('builds/app/js/**/*', ['js']);
  gulp.watch('builds/app/css/*.css', ['css']);
  gulp.watch(['builds/app/*.html',
    'builds/app/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/app/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
