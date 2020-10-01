const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
    mode: "development",
    entry: "./src/test.ts",
    output: {
        filename: "test.js",
        path: outputPath
    },
    module: {
        rules:[
            {
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    // webpack-dev-serverのドキュメントルート
    devServer: {
        contentBase: outputPath
    }
}