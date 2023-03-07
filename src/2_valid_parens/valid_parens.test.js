const { isValid } = require("./valid_parens");

describe("#valid_parens", () => {
  it("should show if parens are valid or invalid", () => {
    expect(isValid('()')).toBe(true)
    expect(isValid('()[]{}')).toBe(true)
    expect(isValid('(]')).toBe(false)
  });
});
