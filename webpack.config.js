const path = require("path");

module.exports = {
    entry: {
        main: "./index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    mode: "production",
};
