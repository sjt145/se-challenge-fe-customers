const productionConfig = require("./prod.env");
const {merge} = require("webpack-merge");

module.exports = merge(productionConfig, {
  ENV: "'development'",
  PRODUCTION: false,
  API_BASE_URL: "'https://waveaccounting.github.io/se-challenge-fe-customers'"
});
