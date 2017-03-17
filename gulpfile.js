var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		jshint = require('gulp-jshint');

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: 'client'
		},
		open: false,
		notify: true,
		port: 3000
	});

	gulp.watch('client/*.html')
			.on('add', browserSync.reload)
			.on('change', browserSync.reload)
			.on('unlink', browserSync.reload);

	gulp.watch('client/css/**/*.css')
			.on('add', browserSync.reload)
			.on('change', browserSync.reload)
			.on('unlink', browserSync.reload);

	gulp.watch('client/js/app/**/*.js')
			.on('add', browserSync.reload)
			.on('change', browserSync.reload)
			.on('unlink', browserSync.reload);
});

gulp.task('jshint', function() {
	return gulp.src('client/js/**/*.js')
				.pipe(jshint())
				.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['server'], function(){});
