const fs = require('fs');
const axios = require("axios");
const argv = require("minimist")(process.argv.slice(2));

if (typeof(argv.id) === "string") {
  fs.writeFileSync("./my_id.txt", argv.id);
}