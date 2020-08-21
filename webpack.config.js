const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "App.js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx", ".png", ".jpg"],
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: false,
          comments: false,
          compress: {
            warnings: process.env.WEBPACK_MODE == "production" ? false : true,
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            ie8: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            drop_console: process.env.WEBPACK_MODE == "production" ? true : false,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|gif|jpg|jpeg|ttf|woff|woff2|otf)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 60,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.4, 0.7],
                speed: 1,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyURLs: true,
        minifyJS: true,
        removeTagWhitespace: true,
      },
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/static/**", to: "", flatten: true }],
    }),
  ],
};
