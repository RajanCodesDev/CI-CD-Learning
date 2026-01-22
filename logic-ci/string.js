function toUpperSafe(str) {
  if (typeof str !== "string") {
    return null;
  }
  return str.toUpperCase();
}

module.exports = { toUpperSafe };
