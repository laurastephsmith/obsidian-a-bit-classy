// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(cb) {
  gulp
    .src('src/*.scss')
    .pipe(sass())
    .pipe(
      gulp.dest('.')
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch(['src/*.scss', 'src/*/*.scss'], gulp.series('sass'));
    cb();
  })
);