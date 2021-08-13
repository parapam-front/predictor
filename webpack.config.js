const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd


const fileName = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }
  ]
  if (isDev) {
    loaders.push('eslint-loader')
  }
  return loaders
}

module.exports = {
  target: isDev ? 'web' :'browserslist',
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      // cacheGroups: {
      //   vendor: {
      //     name: 'vendors',
      //     test: /node_modules/,
      //     chunks: 'all',
      //     enforce: true
      //
      //   }
      // }
    }
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue$': 'vue/dist/vue.js'
    }
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
          noErrorOnMissing: true
        },
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, 'dist/images'),
          noErrorOnMissing: true
        },
        {
          from: path.resolve(__dirname, 'src/assets/fonts'),
          to: path.resolve(__dirname, 'dist/fonts'),
          noErrorOnMissing: true
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: fileName('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {loader: MiniCssExtractPlugin.loader,},
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  }
}
