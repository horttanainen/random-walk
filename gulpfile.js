var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var stream = require('webpack-stream');
var webpackConfig = require("./webpack.config.js");

let path = {
	// HTML: 'src/index.html',
	ALL: ['src/**/*.jsx', 'src/**/*.js'],
	MINIFIED_OUT: 'build.min.js',
	DEST_SRC: 'dist/src',
	DEST_BUILD: 'dist/build',
	DEST: 'dist'
};

gulp.task('webpack', [], function() {
	return gulp.src(path.ALL)
		.pipe(sourcemaps.init())
		.pipe(stream(webpackConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.DEST_BUILD));
});


gulp.task("webpack-dev-server", function(callback) {
	let myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: "/" + myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if (err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});

gulp.task('watch', function() {
	gulp.watch(path.ALL, ['webpack']);
});


gulp.task('default', ['webpack-dev-server', 'watch']);

// gulp.task('default', function() {
//   return gulp.src('src/entry.js')
//     .pipe(webpack( require('./webpack.config.js') ))
//     .pipe(gulp.dest('dist/'));
// });
