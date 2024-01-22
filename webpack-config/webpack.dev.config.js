const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const devEnv = require("../config/dev.env");

const parentDir = path.join(__dirname, "../");
const srcPath = path.join(parentDir, "src");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", path.join(parentDir, "/src/index.tsx")],
  output: {
    path: path.join(parentDir, "/build"),
    filename: "[name].js",
    chunkFilename: "[id].[name].chunk.js",
    publicPath: "/"
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.join(parentDir, "/build"),
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true
  },
  stats: {
    errorDetails: true
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@": srcPath, // shortcut to reference src folder from anywhere
      "@/app-types": path.join(srcPath, "app-types/"),
      "@/shared": path.join(srcPath, "shared/"),
      "@/http": path.join(srcPath, "http/"),
      "@redux": path.join(srcPath, "redux/"),
      "@/constants": path.join(srcPath, "constants/"),
      "@/pages": path.join(srcPath, "pages/"),
      "@/utils": path.join(srcPath, "utils/"),
      "@/assets": path.join(srcPath, "assets/")
    }
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      loader: "ts-loader",
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {      // The object assigned to "option" field can alternatively moved to ".babelrc" file
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          plugins: [
            "module:@babel/plugin-proposal-class-properties"
          ]
        }
      }
    }, {
      test: /\.html$/,
      use: "html-loader"
    }, {
      test: /\.handlebars/,
      use: "handlebars-loader",
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    }, {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [{
        loader: "file-loader",
        options: {
          outputPath: "images",
        }
      }],
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [{
        loader: "file-loader",
        options: {
          outputPath: "fonts",
        }
      }],
    }]
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env": devEnv,
    }),
    new HtmlWebpackPlugin({
      template: path.join(parentDir, "./public/index.hbs"),
      inject: true,
      process: {
        env: {
        },
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin()
  ]
};
