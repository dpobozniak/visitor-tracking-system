const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  const environment = isProduction ? 'production' : 'development';
  const engineUrl = env.engine_url;
  const publicPath = env.public_path || '';

  return {
    context: sourcePath,

    entry: {
      app: './index.js',
    },

    output: {
      chunkFilename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      publicPath,
      path: distPath,
    },

    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      splitChunks: {
        cacheGroups: {
          // Split vendor code to its own chunk(s)
          vendors: {
            test: /[\\/]node_modules[\\/]/i,
            chunks: 'all',
          },
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
      // The runtime should be in its own chunk
      runtimeChunk: {
        name: 'runtime',
      },
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(environment),
          ENGINE_URL: JSON.stringify(engineUrl),
        },
      }),

      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),

      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
        // chunkFilename: isProduction ? '[id].[contenthash].css' : '[id].css',
      }),

      new ScriptExtHtmlWebpackPlugin({
        async: ['compatibility'],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [{
            loader: 'babel-loader',
          }],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            // !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
            // 'css-loader',
            // 'sass-loader',
            {
              loader: !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
            }, {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: { name: 'images/[name].[hash:8].[ext]' },
          }],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },

    devtool: (() => {
      if (isProduction) return 'hidden-source-map';
      return 'cheap-module-eval-source-map';
    })(),

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8769,
      hot: true,
      liveReload: false,
    },
  };
};
