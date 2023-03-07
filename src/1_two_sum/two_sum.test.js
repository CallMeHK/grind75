const { twoSum } = require("./two_sum");

describe("#two_sum", () => {
  it("should correctly find indices", () => {
    expect(twoSum([2, 7, 11, 15], 9).sort()).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6).sort()).toEqual([1, 2]);
    expect(twoSum([3, 3], 6).sort()).toEqual([0, 1]);
    expect(twoSum([3, 2, 3], 6).sort()).toEqual([0, 2]);
  });
});
