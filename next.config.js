module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
};
