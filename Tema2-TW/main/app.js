function addTokens(input, tokens) {
  if (!(typeof input === "string")) throw "Invalid input";

  if (input.length < 6) throw "Input should have at least 6 characters";

  for (let i = 0; i < tokens.length; i++) {
    if (!(typeof tokens[i].tokenName === "string"))
      throw "Invalid array format";
  }

  if (!input.includes("...")) return input;
  else input = input.replace("...", "${subsemnatul}");
  return input;
}
const app = {
  addTokens: addTokens,
};

module.exports = app;
