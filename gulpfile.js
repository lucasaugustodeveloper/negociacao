const gulp = require('gulp')
const browserSync = require('browser-sync')
const jshint = require('gulp-jshint')

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './'
    },
    open: false,
    port: 3000,
    reloadOnRestart: true
  })

  gulp.watch([
    'index.html',
    'assets/css/**/*.css',
    'assets/js/**/*.js'
  ], browserSync.reload)
})

gulp.task('jshint', () => {
  return gulp.src('assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
})


gulp.task('default', ['server'], () => {})
