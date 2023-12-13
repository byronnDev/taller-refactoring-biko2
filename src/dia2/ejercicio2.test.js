const isPositiveNumber = (num) => {
  return num >= 0
};

describe("isPositiveNumber", () => {
  it("should return true when is poistive number", () => {
    const positiveNumber = isPositiveNumber(1);

    expect(positiveNumber).toBeTruthy();
  });

  it("should return false when is negative", () => {
    const negativeNumber = isPositiveNumber(-5);

    expect(negativeNumber).toBeFalsy();
  });

});
