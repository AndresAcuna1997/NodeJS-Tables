const { createFileTable } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

console.clear();

//DONT DO IT THIS WAY
// console.log("Process", process.argv);
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

const { b, l, m } = argv;

createFileTable(b, l, m)
  .then((res) => console.log(`File ${res} created!!!`.bgBlue))
  .catch((err) => console.error(err));
