const { toUpperSafe } = require("../string");

if (toUpperSafe("ci") !== "CI") {
  console.error("Uppercase failed");
  process.exit(1);
}

if (toUpperSafe(123) !== null) {
  console.error("Non-string input should return null");
  process.exit(1);
}

console.log("string tests passed");
