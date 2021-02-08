const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const _ = require('lodash');

module.exports = {
    entry: {
        boilerplate: './src/boilerplate.js',
        index: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                './src/favicon.ico'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            excludeChunks: ['print']
        }),
        new HtmlWebpackPlugin({
            filename: 'print.html',
            template: './print.html',
            excludeChunks: ['index']
        }),
    ],
    output: {
        //filename: '[name].[contenthash].js',
        //not using hash as the dist folder will be versioned
        filename: '[name].js',
        publicPath: '',
    },
    optimization: {
        runtimeChunk: 'single',
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    }
                }
            }
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    {
                        // Run post css actions
                        loader: 'postcss-loader',
                        options: {
                            // post css plugins, can be exported to postcss.config.js
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            //options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    }
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    preprocessor: (content, loaderContext) => {
                        try {
                            const compiled = _.template(content);
                            return compiled(require('./src/data'));
                        } catch (error) {
                            loaderContext.emitError(error); //comment if you'd like to bypass the errors

                            return content;
                        }
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            }
        ],
    },
};
