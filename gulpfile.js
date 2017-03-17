const gulp = require('gulp')
const browserSync = require('browser-sync')
const jshint = require('gulp-jshint')

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: 'client'
    },
    open: false,
    port: 3000,
    reloadOnRestart: true
  })
  gulp.watch('index.html')
    .on('add', browserSync.reload)
    .on('change', browserSync.reload)
    .on('unlink', browserSync.reload)
  gulp.watch('assets/css/**/*.css')
    .on('add', browserSync.reload)
    .on('change', browserSync.reload)
    .on('unlink', browserSync.reload)
  gulp.watch('assets/js/**/*.js')
    .on('add', ['jshint', browserSync.reload])
    .on('change', ['jshint', browserSync.reload])
    .on('unlink', ['jshint', browserSync.reload])
})

gulp.task('jshint', () => {
  return gulp.src('assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
})


gulp.task('default', ['server'], () => {})
