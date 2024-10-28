const fs = require("node:fs");

const args = process.argv.slice(2);
const inputFileName = args[0];
const outputFileName = args[1];

fs.readFile(inputFileName, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const lines = data.split("\n");
  console.log(lines);
  var fileContent = [];
  fileContent.push("{");
  for (let i = 0; i < lines.length; i++) {
    fileContent.push(
      '"' +
        i +
        '"' +
        ":" +
        '"' +
        lines[i] +
        '"' +
        (i == lines.length - 2 ? "" : ",")
    );
  }
  fileContent.pop();
  fileContent.push("}");
  fs.writeFile(outputFileName, fileContent.join("\n"), (err) => {});
});
