const isPositiveNumber = (num) => {
  return num >= 0
};

describe("sum", () => {
  it("should return true when is poistive number and false when is negative", () => {
    const result = isPositiveNumber(1);

    expect(result).toBeTruthy()

    const result2 = isPositiveNumber(-5);

    expect(result2).toBeFalsy()
  });
});
