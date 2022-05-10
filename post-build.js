const fs = require("fs");

fs.renameSync("dist/src", "dist_src");
fs.rmdirSync("dist", { recursive: true });
fs.renameSync("dist_src", "dist");

const packageJson = JSON.parse(fs.readFileSync("./output.package.json").toString());
fs.writeFileSync("dist/package.json", JSON.stringify(packageJson, null, 4));
