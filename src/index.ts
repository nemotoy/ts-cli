import commander from "commander";
import fs from "fs";
import { md2html } from "./md2html";

commander.option("--gfm", "enable GFM");
commander.parse(process.argv);
const filePath = commander.args[0];

const cliOptions = {
  gfm: false,
  ...commander.opts(),
};

fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  const html = md2html(file, cliOptions);
  console.log(html);
});
