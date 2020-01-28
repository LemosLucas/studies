const path = require('path');
const extractCssPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [];


plugins.push(new webpack.DefinePlugin({}));

plugins.push(new htmlWebpackPlugin({
    hash: true,
    minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
    },
    filename: 'index.html',
    template: __dirname + '/main.html'
}));

plugins.push(new extractCssPlugin({
    filename: 'styles.css'
}));

plugins.push(
    // Fará com o jQuery esteja disponível em escopo global para outros módulos
    new webpack.ProvidePlugin({
        '$': 'jquery/dist/jquery.js',
        'jQuery': 'jquery/dist/jquery.js'
    })
);

let config = {
    entry: {
        app: "./app-src/app.js",
        vendor: ['jquery', 'bootstrap', 'reflect-metadata']
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
        // publicPath: 'dist' // Will no longer be needed after we inserted the 'html-webpack-plugin'
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        // Config. abaixo faz com que o bundle gerado seja separado em 'chunks'. A decisão de quando criar um novo 'chunk'
        // pode ser vista em https://webpack.js.org/plugins/split-chunks-plugin/ 
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader' // Loaders são aplicados da direita para a esquerda, em sequência!!
                use: [
                    extractCssPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins
}

module.exports = (env, argv) => {
    let SERVICE_URL;
    if (argv.mode) {
        // Only enter here if it is different from 'undefined'
        if (argv.mode === 'production') {
            SERVICE_URL = 'http://endereco-sua-api';
            console.log(`SERVICE_URL: ${SERVICE_URL}`);
        } else {
            SERVICE_URL = 'http://localhost:3000';
            console.log(`SERVICE_URL: ${SERVICE_URL}`);
        }

        config.plugins[0].definitions.SERVICE_URL = JSON.stringify(SERVICE_URL);
        console.log(config.plugins[0]);
    }

    return config;
}