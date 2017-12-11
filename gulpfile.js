const gulp = require('gulp'),
  pug = require('gulp-pug'),
  stylus = require('gulp-stylus'),
  imagemin = require('gulp-imagemin'),
  connect = require('gulp-connect'),
  data = require('gulp-data'),
  babel = require('gulp-babel'),
  lint = require('gulp-eslint'),
  stylint = require('gulp-stylint'),
  ghPages = require('gulp-gh-pages');

gulp.task('pug', () =>
  gulp.src('./src/*.pug')
  .pipe(data(() => require('./projects.json')))
  .pipe(pug())
  .pipe(gulp.dest('./out'))
  .pipe(connect.reload()))

gulp.task('stylint', () =>
  gulp.src('./src/assets/styles/**/*.styl')
  .pipe(stylint())
  .pipe(stylint.reporter())
  .pipe(connect.reload()))

gulp.task('stylus', () =>
  gulp.src('./src/assets/styles/**/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./out/assets/styles/'))
  .pipe(connect.reload()))

gulp.task('lint', () =>
  gulp.src('./src/assets/scripts/**/*.js')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(connect.reload()))

gulp.task('babel', () =>
  gulp.src('./src/assets/scripts/**/*.js')
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(gulp.dest('./out/assets/scripts/'))
  .pipe(connect.reload()))

gulp.task('imagemin', () =>
  gulp.src('src/assets/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('out/assets/img/'))
)

// gulp.task('tinify', () =>
//   gulp.src('src/assets/img/*')
//   .pipe(tinify('f5Bp9L5AjZa4bda9Bq9k4JyhYMhZOtIw'))
//   .pipe(gulp.dest('/out/assets/img/')))

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.pug'], ['pug'])
  gulp.watch(['./src/assets/styles/**/*.styl'], ['stylint', 'stylus'])
  gulp.watch(['./src/assets/scripts/**/*.js'], ['lint', 'babel'])
})

gulp.task('serve', () => connect.server({
  root: './out',
  livereload: true
}))

gulp.task('ghpages', () => 
  gulp.src('./out/**/*').pipe(ghPages())
)

gulp.task('build', ['pug', 'stylint', 'stylus', 'imagemin', 'lint', 'babel'])
gulp.task('server', ['serve', 'watch'])
gulp.task('deploy', ['build', 'ghpages'])
