import commander from "commander";
import fs from "fs";
import marked from "marked";

commander.parse(process.argv);

const filePath = commander.args[0];
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  const html = marked(file);
  console.log(html);
});
