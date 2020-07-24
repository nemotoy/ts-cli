import commander from "commander";
import fs from "fs";
import marked from "marked";

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
  const html = marked(file, {
    gfm: cliOptions.gfm,
  });

  console.log(html);
});
