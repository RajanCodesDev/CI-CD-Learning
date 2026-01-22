const { divide } = require("../math");

try {
  divide(10, 2);
} catch {
  console.error("Unexpected failure");
  process.exit(1);
}

try {
  divide(10, 0);
  console.error("Expected error not thrown");
  process.exit(1);
} catch {
  // expected
}

console.log("math tests passed");
