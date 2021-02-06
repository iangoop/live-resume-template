const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    /** use watch only as an alternative to devServer **/
    //watch: true,
    devServer: {
        contentBase: './build',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
    },
});
