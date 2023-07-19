// webpack.common.ts

// import webpack from 'webpack';
import paths from './webpack.paths';
// import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';


// Config | Common
const configCommon: any = {
    
    // target: 'web',

    // entry: [
    //     paths.src + '/index.ts'
    // ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{ loader: 'ts-loader' }],
                exclude: /node_modules/,
            },
        ],
    },


    // resolve: {
    //     modules: [paths.src, 'node_modules'],
    //     extensions: [
    //         '.ts', '.tsx',
    //         '.js', '.jsx',
    //         '.json',
    //         '.scss'
    //     ],
    //     alias: {
    //         '@': paths.src,
    //         assets: paths.public,
    //     },
    // },


    // output: {
    //     library: 'deep.gl',
    //     libraryTarget: 'umd',
    //     libraryExport: 'default',
    //     path: __dirname + '/lib',
    //     filename: '[name].js',
    //     umdNamedDefine: true
    // },

    // plugins: [

    //     new HtmlWebpackPlugin(
    //         {
    //             title: 'block.gl',
    //             template: paths.src + '/index.html',
    //             filename: 'index.html',
    //         }
    //     ),

    // ],
};

// Config | Export
export default configCommon