/* eslint-disable @typescript-eslint/no-var-requires */
const prod = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/dist/`,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json',
            '.scss',
            '.css',
            '.svg',
          ],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
