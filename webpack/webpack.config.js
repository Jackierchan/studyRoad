const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
module.exports={
    mode: 'development',
    entry:{
        'index':'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },{
            test:/\.(png|jpg|gif)/,
                use:[
                    {
                        loader:'url-loader',
                        option:{
                            limit:500,
                            outputPath:'./'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          minify:{
              removeAttributeQuotes:true
          },
        hash:true,
        template:'./src/index.html'
            }),
        new ExtractTextWebpackPlugin("./css/style.css")
    ],
   devServer:{
       contentBase:path.resolve(__dirname,'dist'),
       host : 'localhost',
       compress:true,
       port:8081,
       hot:true,
       open:true
   }
};