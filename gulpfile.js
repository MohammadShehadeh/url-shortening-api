var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

sass.compiler = require('node-sass');

gulp.task('default', function () {
	return gulp.src('./assets/sass/**/*.scss')
		.pipe(concat('main.scss'))
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
	gulp.watch('./assets/sass/**/*.scss', gulp.series('default'));
});

