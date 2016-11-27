const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");

const myConfig = Object.create(webpackConfig);
myConfig.devtool = "eval";
myConfig.debug = true;

// Start a webpack-dev-server
new WebpackDevServer(webpack(myConfig), {
	stats: {
		colors: true
	}
})
.listen(8080, "localhost", err => {
	if (err) {
		throw new Error("webpack-dev-server", err);
	}
	console.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
});
