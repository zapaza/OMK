const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [ 
        new webpack.ProvidePlugin({ 
            "jQuery": "jquery", 
            "window.jQuery": "jquery", 
            "jquery": "jquery", 
            "window.jquery": "jquery", 
            "$": "jquery", 
            "window.$": "jquery" ,
            Popper: ['popper.js', 'default']
        }) 
    ],
    
    entry: {
        main: "./src/js/index.js",
        news: "./src/js/news.js"
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ],
        // loaders: [
        //     { test: /jquery-mousewheel/, loader: "imports?define=>false&this=>window" },
        //     { test: /malihu-custom-scrollbar-plugin/, loader: "imports?define=>false&this=>window" }
        // ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules")
        }
    }
};

// var $ = require('jquery');
// require("jquery-mousewheel")($);
// require('malihu-custom-scrollbar-plugin')($);