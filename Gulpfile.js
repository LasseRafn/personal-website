var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
	gulp.src('sass/app.sass')
		.pipe(sass({ outputStyle: 'compressed' })
			.on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('default', function () {
	gulp.watch('sass/app.sass', ['styles']);
});