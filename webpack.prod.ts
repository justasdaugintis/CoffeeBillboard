import path from "path";
import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test:/\.(s*)css$/,  
        loaders: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ], 
      }
    ]
  },
  plugins: [htmlPlugin]
};

export default config;