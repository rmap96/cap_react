const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        // Path part of node JS
        // We must put the full path.
        // Reference to the directory where it is going to be save.
        path: path.resolve(__dirname, 'build'),
        // What should the file be called.
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    // Module system.
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
            {
                // loaders are applied from right to left.
                //use: ['style-loader', 'css-loader'],
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;
