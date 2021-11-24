const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    web: __dirname + "/dist/morajlab/cli/src/cli.js",
  },
  output: {
    path: __dirname + "/dist",
  },
  module: {},
});
