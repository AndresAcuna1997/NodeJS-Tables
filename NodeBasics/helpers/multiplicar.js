const fs = require("fs");
const colors = require("colors");

const createFileTable = async (base = 5, list = false, max_num) => {
  try {
    let file = ""; //If created with consoleOutput the .txt will have an undefined (?)
    let consoleOutput = "";

    console.log("===========================".green);
    console.log("Tabla del".red, colors.yellow(base));
    console.log("===========================".green);

    for (let index = 1; index <= max_num; index++) {
      file += `${base} x ${index} = ${index * base}\n`;
      consoleOutput += `${base} ${colors.green("x")} ${index} ${colors.green(
        "="
      )} ${index * base}\n`;
    }

    fs.writeFileSync(`../output/Tabla-${base}.txt`, file);

    list ? console.log(consoleOutput) : null;

    return `Tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { createFileTable };
