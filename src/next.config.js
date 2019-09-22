const withSass = require("@zeit/next-sass");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const nextConfig = {
  distDir: "../.next"
};

const sassConfig = {
  test: /\.(eot|otf|ttf|woff|woff2)$/,
  use: {
    loader: "url-loader",
    options: {
      limit: 100000,
      name: "[name].[ext]",
      outputPath: "static/fonts",
      publicPath: "../fonts"
    }
  }
};

const imagesConfig = {
  test: /\.(ico|jpg|png|svg)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: "static/images",
      publicPath: "../static/images"
    }
  }
};

module.exports = withSass({
  ...nextConfig,
  webpack(config) {
    config.module.rules.push(sassConfig);
    config.module.rules.push(imagesConfig);
    config.plugins.push(
      new CopyWebpackPlugin([{ from: "static/images/**/*" }])
    );

    return config;
  }
});
