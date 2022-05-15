const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

sass.render(
  {
    file: path.join(__dirname, "/src/scss/common.scss"),
    outFile: path.join(__dirname, "/dist/css/common.min.css"),
    outputStyle: "compressed",
  },
  async function (error, result) {
    if (!error) {
     await fs.writeFile("./dist/css/common.min.css", result.css, function (err) {
        if (!err) {
        }
      });
    }
  }
);
