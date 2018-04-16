const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/app.js',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.jpg$/,
            loader: 'url-loader'
        }]
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    }
};