const gulp = require('gulp'),
  pug = require('gulp-pug'),
  stylus = require('gulp-stylus'),
  imagemin = require('gulp-imagemin'),
  connect = require('gulp-connect');

gulp.task('pug', () => gulp.src('./src/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./out'))
  .pipe(connect.reload()))

gulp.task('stylus', () => gulp.src('./src/assets/styles/**/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./out/assets/styles/'))
  .pipe(connect.reload()))

gulp.task('imagemin', () =>
  gulp.src('src/assets/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('out/assets/img/'))
);

// gulp.task('tinify', () =>
//   gulp.src('src/assets/img/*')
//   .pipe(tinify('f5Bp9L5AjZa4bda9Bq9k4JyhYMhZOtIw'))
//   .pipe(gulp.dest('/out/assets/img/')))

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.pug'], ['pug'])
  gulp.watch(['./src/assets/styles/**/*.styl'], ['stylus'])
  gulp.watch(['./src/assets/scripts/*.js'])
})

gulp.task('serve', () => connect.server({
  root: './out',
  livereload: true
}))

gulp.task('build', ['pug', 'stylus'])
gulp.task('server', ['serve', 'watch'])
