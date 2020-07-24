import commander from "commander";
import fs from "fs";

commander.parse(process.argv);

const filePath = commander.args[0];
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  console.log(file);
});
