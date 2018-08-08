const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const ExtractTextPlugin=require("extract-text-webpack-plugin");
const glob=require('glob');
const PurifyCSSPlugin=require("purifycss-webpack");
const entry = require("./entry_webpack.js");
    module.exports={
    entry:entry,
    mode: 'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                        fallback:"style-loader",
                        use:[
                            {
                                loader:"css-loader",
                                options:{importLoaders:1}
                            },'postcss-loader']
            })},{
                test:/\.(png|jpg|gif)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:500,
                            outputPath:'image/'
                        }
                    }
                ]
            }
            ,{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss/,
                // use: [
                //     {
                //         loader: 'style-loader'
                //     },
                //     {
                //          loader:'css-loader'
                //     },
                //     {
                //          loader:'sass-loader'
                //     }
                // ]
                use:ExtractTextPlugin.extract({
                use:[
                    {
                        loader:'css-loader'
                    },{
                    loader:'sass-loader'
                    }
                ],
                fallback:'style-loader'

            })


    },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "es2015"
                        ]
                    }
                },
                exclude:/node_modules/
            }
            ]},
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            chunks:['index'],
          minify:{
              removeAttributeQuotes:true
          },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextWebpackPlugin("./css/style.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*html'))
        }),
        new webpack.BannerPlugin("大大大大大大")
    ],
   devServer:{
       contentBase:path.resolve(__dirname,'dist'),
       host : 'localhost',
       compress:true,
       port:8081,
       hot:true,
       open:true
   }
}