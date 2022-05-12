// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var rename = require('gulp-rename');

gulp.task('sass', function(cb) {
  gulp
    .src('src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'))
    .pipe(rename('A Bit Classy.css'))
    .pipe(gulp.dest('/home/laura/Dropbox/Library/.obsidian/themes/'));
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch(['src/*.scss', 'src/*/*.scss'], gulp.series('sass'));
    cb();
  })
);