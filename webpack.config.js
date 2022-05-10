import TypescriptDeclarationPlugin from "typescript-declaration-webpack-plugin";
import * as path from "path";

export default {
    entry: './src/index.ts',
    devtool: 'source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve("./dist"),
        library: 'injectomat-vue',
        libraryTarget: "umd"
    },
    plugins: [
        new TypescriptDeclarationPlugin()
    ]
};
