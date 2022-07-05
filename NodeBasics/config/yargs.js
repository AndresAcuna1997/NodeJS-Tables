const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
  })
  .option("m", {
    alias: "max",
    type: "number",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Must be a number";
    }
    return true;
  }).argv;

module.exports = argv;
